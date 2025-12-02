import { useState, useEffect } from 'react'
import PlayersCard from './components/PlayersCard'
import CategoriesCard from './components/CategoriesCard'
import ImpostersCard from './components/ImpostersCard'
import ImposterHintCard from './components/ImposterHintCard'
import TimeLimitCard from './components/TimeLimitCard'
import GameScreen from './components/GameScreen'
// @ts-ignore
import wordsRaw from './words.js'

interface WordData {
  word: string;
  no: number;
  valence: { mean: number; sd: number };
  arousal: { mean: number; sd: number };
  dominance: { mean: number; sd: number };
  word_frequency: string | number;
}

const words: WordData[] = wordsRaw as WordData[];

// Hint words for imposters
const HINT_LIST = [
  'Food', 'Animal', 'Vehicle', 'Building', 'Object', 'Color', 'Weather', 'Music',
  'Profession', 'Sport', 'Nature', 'Technology', 'Emotion', 'Shape', 'Number', 'Time'
]

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
  const [players, setPlayers] = useState(['Emma', 'Olivia', 'James', 'Andy'])
  const [imposters, setImposters] = useState(1)
  const [previousImposters, setPreviousImposters] = useState<number | null>(null)
  const [wasPlayerRemoved, setWasPlayerRemoved] = useState(false)
  const [previousPlayerCount, setPreviousPlayerCount] = useState(4)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0)
  const currentPlayerName = players.length > 0 ? players[currentPlayerIndex] : 'Player 1'
  const [currentWord, setCurrentWord] = useState('')
  const [isWordRevealed, setIsWordRevealed] = useState(false)
  // Add state to control the reveal menu and final reveal
  const [showFinalMenu, setShowFinalMenu] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [impostorIndices, setImpostorIndices] = useState<number[]>([]);
  const [imposterHintEnabled, setImposterHintEnabled] = useState(false);
  const [imposterHints, setImposterHints] = useState<{[key: number]: string}>({});

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
  // Weighted random word selection based on arousal values
  const selectedWordObj = selectWeightedWord(words)
  setCurrentWord(selectedWordObj.word)
  setIsWordRevealed(false)
  setIsGameStarted(true)
  setCurrentPlayerIndex(0)
  // Randomly choose impostors for the round
  const availableIndices = Array.from({ length: players.length }, (_, i) => i)
  const chosen: number[] = [];
  for (let i = 0; i < imposters && availableIndices.length > 0; ++i) {
    const idx = Math.floor(Math.random() * availableIndices.length)
    chosen.push(availableIndices[idx])
    availableIndices.splice(idx, 1)
  }
  setImpostorIndices(chosen)

  // Generate hints for imposters if hint feature is enabled
  if (imposterHintEnabled) {
    const hints: {[key: number]: string} = {};
    const availableHints = [...HINT_LIST];
    chosen.forEach(impostorIndex => {
      if (availableHints.length > 0) {
        const hintIndex = Math.floor(Math.random() * availableHints.length);
        hints[impostorIndex] = availableHints[hintIndex];
        availableHints.splice(hintIndex, 1);
      }
    });
    setImposterHints(hints);
  } else {
    setImposterHints({});
  }
}

  const handleCloseGame = () => {
    setIsGameStarted(false)
    setShowFinalMenu(false)
    setShowResults(false)
  }

  const handleResetGame = () => {
    setPlayers(['Emma', 'Olivia', 'James', 'Andy'])
    setImposters(1)
    setPreviousImposters(null)
    setWasPlayerRemoved(false)
    setPreviousPlayerCount(4)
    setIsGameStarted(false)
    setCurrentPlayerIndex(0)
    setCurrentWord('')
    setIsWordRevealed(false)
    setImpostorIndices([])
    setImposterHints({})
    setShowFinalMenu(false)
    setShowResults(false)
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
        {/* Header */}
        <header className="relative pt-8 pb-6 px-4">
          <button
            onClick={handleCloseGame}
            className="absolute top-8 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-tight">
              IMPOSTER
            </h1>
            <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-tight">
              WHO?
            </h2>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-4 pb-8 flex flex-col items-center justify-center">
          <div className="w-full max-w-md bg-white p-6 rounded-xl shadow text-center">
            {!showResults ? (
              <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setShowResults(true)}>
                Reveal Imposter and Word
              </button>
            ) : (
              <>
                <div className="mt-4 text-lg text-gray-700 font-semibold">Word: {currentWord}</div>
                <div className="mt-2 text-lg text-gray-700 font-semibold">
                  Imposters: {impostorIndices ? impostorIndices.map((idx: number) => players[idx]).join(', ') : ''}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Header */}
      <header className="relative pt-8 pb-6 px-4">
        <button className="absolute top-8 left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
          <span className="text-gray-600 text-xl font-bold">?</span>
        </button>
        <button onClick={handleResetGame} className="absolute top-8 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-tight">
            IMPOSTER
          </h1>
          <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-tight">
            WHO?
          </h2>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 pb-8 space-y-4 max-w-md mx-auto w-full">
        <PlayersCard players={players} onPlayersChange={handlePlayersChange} />
        <CategoriesCard currentWord={currentWord} isWordRevealed={isWordRevealed} />
        <ImpostersCard imposters={imposters} maxImposters={maxImposters} onImpostersChange={handleImpostersChange} />
        <ImposterHintCard enabled={imposterHintEnabled} onEnabledChange={setImposterHintEnabled} />
        <TimeLimitCard />
        <div className="pt-4">
          <button
            onClick={handleStartGame}
            className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl text-lg font-semibold hover:bg-blue-600 transition-colors shadow-md"
          >
            Start Game
          </button>
        </div>
      </main>
    </div>
  )
}

export default App

