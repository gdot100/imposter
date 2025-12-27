import { useState, useEffect } from 'react'
import PlayersCard from './components/PlayersCard'
import CategoriesCard from './components/CategoriesCard'
import ImpostersCard from './components/ImpostersCard'
import ImposterHintCard from './components/ImposterHintCard'
import TimeLimitCard from './components/TimeLimitCard'
import GameScreen from './components/GameScreen'
import AdvancedSettings from './components/AdvancedSettings'
// @ts-ignore
import wordsRaw from './words.js'

// localStorage keys
const STORAGE_KEYS = {
  PLAYERS: 'imposter-who-players',
  IMPOSTERS: 'imposter-who-imposters',
  IMPOSTER_HINT_ENABLED: 'imposter-who-imposter-hint-enabled',
  TIME_LIMIT_ENABLED: 'imposter-who-time-limit-enabled',
  TIME_LIMIT: 'imposter-who-time-limit',
  WORD_HISTORY: 'imposter-who-word-history',
  TURN_MODE: 'imposter-who-turn-mode',
  DONT_REPEAT: 'imposter-who-dont-repeat',
  CUSTOM_WORDS: 'imposter-who-custom-words'
}

interface WordData {
  word: string;
  no: number;
  valence: { mean: number; sd: number };
  arousal: { mean: number; sd: number };
  dominance: { mean: number; sd: number };
  word_frequency: string | number;
  hint_word: string;
}

const words: WordData[] = wordsRaw as WordData[];


// Weighted random selection based on arousal values
function selectWeightedWord(wordList: WordData[]) {
  // Calculate total weight (sum of arousal means)
  const totalWeight = wordList.reduce((sum, word) => sum + word.arousal.mean, 0);

  // Generate random number between 0 and total weight
  let random = Math.random() * totalWeight;

  // Find the word that corresponds to this random value
  for (const word of wordList) {
    random -= word.arousal.mean;
    if (random <= 0) {
      return word;
    }
  }

  // Fallback (shouldn't happen)
  return wordList[0];
}

function App() {
  const [players, setPlayers] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PLAYERS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) { console.warn('Failed to load players', e); }
    return ['Emma', 'Olivia', 'James', 'Andy'];
  })

  const [imposters, setImposters] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.IMPOSTERS);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed > 0) return parsed;
      }
    } catch (e) { console.warn('Failed to load imposters', e); }
    return 1;
  })

  const [previousImposters, setPreviousImposters] = useState<number | null>(null)
  const [wasPlayerRemoved, setWasPlayerRemoved] = useState(false)
  const [previousPlayerCount, setPreviousPlayerCount] = useState(players.length)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0)
  const currentPlayerName = players.length > 0 ? players[currentPlayerIndex] : 'Player 1'
  const [currentWord, setCurrentWord] = useState('')
  const [isWordRevealed, setIsWordRevealed] = useState(false)

  const [showFinalMenu, setShowFinalMenu] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [impostorIndices, setImpostorIndices] = useState<number[]>([]);

  const [imposterHintEnabled, setImposterHintEnabled] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.IMPOSTER_HINT_ENABLED) === 'true';
  });

  const [imposterHints, setImposterHints] = useState<{ [key: number]: string }>({});

  const [timeLimitEnabled, setTimeLimitEnabled] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.TIME_LIMIT_ENABLED) === 'true';
  });

  const [timeLimit, setTimeLimit] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TIME_LIMIT);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed > 0) return parsed;
      }
    } catch (e) { console.warn('Failed to load time limit', e); }
    return 60;
  });

  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [startingPlayerIndex, setStartingPlayerIndex] = useState<number | null>(null);
  const [turnDirection, setTurnDirection] = useState<'Clockwise' | 'Counter-clockwise' | null>(null);

  const [wordUsageHistory, setWordUsageHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WORD_HISTORY);
      if (saved) return JSON.parse(saved);
    } catch (e) { console.warn('Failed to load word history', e); }
    return [];
  });

  const [turnInstructionMode, setTurnInstructionMode] = useState<'clockwise' | 'counter-clockwise' | 'random' | 'none'>(() => {
    return (localStorage.getItem(STORAGE_KEYS.TURN_MODE) as any) || 'random';
  });

  const [dontRepeatWords, setDontRepeatWords] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.DONT_REPEAT) === 'true';
  });

  const [customWords, setCustomWords] = useState<WordData[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CUSTOM_WORDS);
      if (saved) return JSON.parse(saved);
    } catch (e) { console.warn('Failed to load custom words', e); }
    return words; // Use original words list if no custom list found
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Save configuration to localStorage when settings change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.IMPOSTERS, imposters.toString());
  }, [imposters]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.IMPOSTER_HINT_ENABLED, imposterHintEnabled.toString());
  }, [imposterHintEnabled]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TIME_LIMIT, timeLimit.toString());
  }, [timeLimit]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WORD_HISTORY, JSON.stringify(wordUsageHistory));
  }, [wordUsageHistory]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TURN_MODE, turnInstructionMode);
  }, [turnInstructionMode]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DONT_REPEAT, dontRepeatWords.toString());
  }, [dontRepeatWords]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_WORDS, JSON.stringify(customWords));
  }, [customWords]);

  // Calculate max imposters based on player count
  const maxImposters = Math.max(1, players.length - 1)

  // Adjust imposters when player count changes
  useEffect(() => {
    if (imposters > maxImposters) {
      setImposters(maxImposters)
    } else if (imposters < 1) {
      setImposters(1)
    }
  }, [players.length, maxImposters, imposters])

  // Restore imposters when player is added right after removal
  useEffect(() => {
    if (wasPlayerRemoved && previousImposters !== null && players.length > previousPlayerCount) {
      // Player was added after removal
      const newMaxImposters = Math.max(1, players.length - 1)
      const restoredImposters = Math.min(previousImposters, newMaxImposters)
      setImposters(restoredImposters)
      setPreviousImposters(null)
      setWasPlayerRemoved(false)
    }
    setPreviousPlayerCount(players.length)
  }, [players.length, wasPlayerRemoved, previousImposters, previousPlayerCount])

  // Timer countdown effect
  useEffect(() => {
    if (timeRemaining !== null && timeRemaining > 0 && showFinalMenu) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeRemaining === 0 && showFinalMenu) {
      // Time's up - auto-reveal
      setShowResults(true)
    }
  }, [timeRemaining, showFinalMenu])

  // Start timer when discussion phase starts if time limit is enabled
  useEffect(() => {
    if (showFinalMenu && timeLimitEnabled && timeRemaining === null) {
      setTimeRemaining(timeLimit)
    }
  }, [showFinalMenu, timeLimitEnabled, timeLimit, timeRemaining])

  const handleImpostersChange = (newImposters: number) => {
    // If user manually changes imposters, forget about restoration
    setWasPlayerRemoved(false)
    setPreviousImposters(null)
    setImposters(newImposters)
  }

  const handlePlayersChange = (newPlayers: string[]) => {
    const previousCount = players.length
    const newCount = newPlayers.length

    if (newCount < previousCount) {
      // Player was removed
      setPreviousImposters(imposters)
      setWasPlayerRemoved(true)
      setPlayers(newPlayers)
      // Adjust imposters if needed (handled by useEffect)
    } else if (newCount > previousCount && wasPlayerRemoved) {
      // Player was added right after removal - restoration handled by useEffect
      setPlayers(newPlayers)
    } else {
      // Normal add (not right after removal)
      setWasPlayerRemoved(false)
      setPreviousImposters(null)
      setPlayers(newPlayers)
    }
  }

  const handleStartGame = () => {
    // Filter words based on "Don't Repeat" setting
    let availableWords = [...customWords];
    if (dontRepeatWords && wordUsageHistory.length < customWords.length) {
      availableWords = customWords.filter(w => !wordUsageHistory.includes(w.word));
    }

    // If all words used and we must not repeat, fallback (reset history or just use all)
    if (availableWords.length === 0) {
      availableWords = [...customWords];
    }

    // Weighted random word selection based on arousal values
    const selectedWordObj = selectWeightedWord(availableWords)
    setCurrentWord(selectedWordObj.word)
    setIsWordRevealed(false)
    setIsGameStarted(true)
    setCurrentPlayerIndex(0)

    // Update history
    setWordUsageHistory(prev => [...prev, selectedWordObj.word]);

    // Randomly choose impostors for the round
    const availableIndices = Array.from({ length: players.length }, (_, i) => i)
    const chosen: number[] = [];
    for (let i = 0; i < imposters && availableIndices.length > 0; ++i) {
      const idx = Math.floor(Math.random() * availableIndices.length)
      chosen.push(availableIndices[idx])
      availableIndices.splice(idx, 1)
    }
    setImpostorIndices(chosen)

    // Set starting player and direction based on settings
    const startIdx = Math.floor(Math.random() * players.length)
    setStartingPlayerIndex(startIdx)

    let finalDirection: 'Clockwise' | 'Counter-clockwise' | null = null;
    if (turnInstructionMode === 'random') {
      finalDirection = Math.random() > 0.5 ? 'Clockwise' : 'Counter-clockwise';
    } else if (turnInstructionMode === 'clockwise') {
      finalDirection = 'Clockwise';
    } else if (turnInstructionMode === 'counter-clockwise') {
      finalDirection = 'Counter-clockwise';
    }
    setTurnDirection(finalDirection)

    // Generate hints for imposters if hint feature is enabled
    if (imposterHintEnabled) {
      const hints: { [key: number]: string } = {};
      chosen.forEach(impostorIndex => {
        // Use the hint_word from the selected word object
        hints[impostorIndex] = selectedWordObj.hint_word;
      });
      setImposterHints(hints);
    } else {
      setImposterHints({});
    }
    setTimeRemaining(null)
  }

  const handleCloseGame = () => {
    setIsGameStarted(false)
    setShowFinalMenu(false)
    setShowResults(false)
    setTimeRemaining(null)
    setStartingPlayerIndex(null)
    setTurnDirection(null)
  }

  const handleResetGame = () => {
    const defaultPlayers = ['Emma', 'Olivia', 'James', 'Andy'];
    const defaultImposters = 1;
    const defaultImposterHintEnabled = false;
    const defaultTimeLimitEnabled = false;
    const defaultTimeLimit = 60;

    setPlayers(defaultPlayers)
    setImposters(defaultImposters)
    setPreviousImposters(null)
    setWasPlayerRemoved(false)
    setPreviousPlayerCount(4)
    setIsGameStarted(false)
    setCurrentPlayerIndex(0)
    setCurrentWord('')
    setIsWordRevealed(false)
    setImpostorIndices([])
    setImposterHints({})
    setStartingPlayerIndex(null)
    setTurnDirection(null)
    setTimeLimitEnabled(defaultTimeLimitEnabled)
    setTimeLimit(defaultTimeLimit)
    setTimeRemaining(null)
    setShowFinalMenu(false)
    setShowResults(false)

    // Also reset localStorage to defaults
    try {
      localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(defaultPlayers));
      localStorage.setItem(STORAGE_KEYS.IMPOSTERS, defaultImposters.toString());
      localStorage.setItem(STORAGE_KEYS.IMPOSTER_HINT_ENABLED, defaultImposterHintEnabled.toString());
      localStorage.setItem(STORAGE_KEYS.TIME_LIMIT_ENABLED, defaultTimeLimitEnabled.toString());
      localStorage.setItem(STORAGE_KEYS.TIME_LIMIT, defaultTimeLimit.toString());
    } catch (error) {
      console.warn('Failed to reset localStorage:', error);
    }
  }

  const handleWordRevealed = () => {
    setIsWordRevealed(true)
  }

  const handleNextPlayer = () => {
    // Move to next player in the list
    if (players.length === 0) return;
    setCurrentPlayerIndex((idx) => (idx + 1) % players.length)
    // Reset word reveal for the new player
    setIsWordRevealed(false)
  }

  // Show game screen if game is started
  if (isGameStarted && !showFinalMenu) {
    return (
      <GameScreen
        key={currentPlayerIndex}
        onClose={handleCloseGame}
        playerName={currentPlayerName}
        word={currentWord}
        onNextPlayer={handleNextPlayer}
        onWordRevealed={handleWordRevealed}
        isLastPlayer={currentPlayerIndex === players.length - 1}
        onRevealMenu={() => setShowFinalMenu(true)}
        isCurrentPlayerImpostor={impostorIndices.includes(currentPlayerIndex)}
        imposterHint={imposterHints[currentPlayerIndex]}
      />
    );
  }
  // Show the reveal menu after the last player
  if (showFinalMenu) {
    return (
      <div className="min-h-screen bg-gray-200 flex flex-col">
        {/* Header with Timer */}
        <header className="relative pt-8 pb-6 px-4">
          {timeRemaining !== null && timeRemaining > 0 && (
            <div className="absolute top-8 left-4 bg-white rounded-full px-3 py-1 shadow-sm">
              <span className={`text-sm font-semibold ${timeRemaining <= 10 ? 'text-red-600' : 'text-gray-700'}`}>
                {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
              </span>
            </div>
          )}
          <button
            onClick={handleCloseGame}
            className="absolute top-8 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2">
              <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-tight">
                IMPOSTER
              </h1>
              <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-tight">
                WHO?
              </h2>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-4 pb-8 flex flex-col items-center justify-center">
          <div className="w-full max-w-md bg-white p-6 rounded-xl shadow text-center">
            {startingPlayerIndex !== null && turnDirection && (
              <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
                <p className="text-blue-800 font-bold text-lg">
                  {players[startingPlayerIndex]} goes first!
                </p>
                <p className="text-blue-600 font-medium italic">
                  Direction: {turnDirection}
                </p>
              </div>
            )}

            {!showResults ? (
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-colors" onClick={() => setShowResults(true)}>
                Reveal Imposter and Word
              </button>
            ) : (
              <>
                <div className="mt-4 text-lg text-gray-700 font-semibold">Word: {currentWord}</div>
                <div className="mt-2 text-lg text-gray-700 font-semibold text-wrap">
                  Imposters: {impostorIndices ? impostorIndices.map((idx: number) => players[idx]).join(', ') : ''}
                </div>
                {imposterHintEnabled && impostorIndices.length > 0 && (
                  <div className="mt-2 text-sm text-blue-600 font-bold uppercase tracking-widest">
                    Hint: {imposterHints[impostorIndices[0]] || 'None'}
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    );
  }

  console.log('Rendering main menu');
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Header */}
      <header className="relative pt-8 pb-6 px-4">
        <button onClick={setIsSettingsOpen.bind(null, true)} className="absolute top-8 left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <button onClick={handleResetGame} className="absolute top-8 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors">
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-2 px-[45px]">
            <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-tight">
              IMPOSTER
            </h1>
            <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-tight">
              WHO?
            </h2>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 pb-8 space-y-4 max-w-md mx-auto w-full">
        <PlayersCard players={players} onPlayersChange={handlePlayersChange} />
        <CategoriesCard currentWord={currentWord} isWordRevealed={isWordRevealed} />
        <ImpostersCard imposters={imposters} maxImposters={maxImposters} onImpostersChange={handleImpostersChange} />
        <ImposterHintCard enabled={imposterHintEnabled} onEnabledChange={setImposterHintEnabled} />
        <TimeLimitCard
          enabled={timeLimitEnabled}
          timeLimit={timeLimit}
          onEnabledChange={setTimeLimitEnabled}
          onTimeLimitChange={setTimeLimit}
        />
        <div className="pt-4 space-y-2">
          <button
            onClick={handleStartGame}
            className="w-full px-6 py-3 sm:py-4 bg-blue-500 text-white rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-600 transition-colors shadow-md"
          >
            Start Game
          </button>
        </div>
      </main>

      {isSettingsOpen && (
        <AdvancedSettings
          onClose={() => setIsSettingsOpen(false)}
          turnMode={turnInstructionMode}
          onTurnModeChange={setTurnInstructionMode}
          dontRepeat={dontRepeatWords}
          onDontRepeatChange={setDontRepeatWords}
          history={wordUsageHistory}
          onClearHistory={() => setWordUsageHistory([])}
          onRemoveHistoryItem={(index) => {
            const updated = [...wordUsageHistory];
            updated.splice(index, 1);
            setWordUsageHistory(updated);
          }}
          customWords={customWords}
          onCustomWordsChange={setCustomWords}
          onRestoreDefaults={() => setCustomWords(words)}
        />
      )}
    </div>
  )
}

export default App

