import { useState, useRef, useEffect } from 'react'

interface GameScreenProps {
  onClose: () => void
  playerName: string
  word: string
  onNextPlayer: () => void
  onWordRevealed?: () => void
  isLastPlayer?: boolean;
  onRevealMenu?: () => void;
  isCurrentPlayerImpostor?: boolean;
  imposterHint?: string;
}

export default function GameScreen({ onClose, playerName, word, onNextPlayer, onWordRevealed, isLastPlayer, onRevealMenu, isCurrentPlayerImpostor, imposterHint }: GameScreenProps) {
  const [isHolding, setIsHolding] = useState(false)
  const [hasRevealed, setHasRevealed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const wasHoldingRef = useRef(false)

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleStartHold = () => {
    wasHoldingRef.current = true
    setIsHolding(true)
  }

  const handleEndHold = () => {
    if (wasHoldingRef.current) {
      setHasRevealed(true)
      wasHoldingRef.current = false
      // Notify parent that word was revealed
      if (onWordRevealed) {
        onWordRevealed()
      }
    }
    setIsHolding(false)
  }

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Header */}
      <header className="relative pt-8 pb-6 px-4">
        <button
          onClick={onClose}
          className="absolute top-8 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-tight">
            IMPOSTER WHO?
          </h1>
        </div>
      </header>

      {/* Main Content Card */}
      <main className="flex-1 px-4 pb-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-lg" style={{ position: 'relative' }}>
          {/* Invisible, large hitbox overlay for hold-to-reveal, captures all input without affecting visuals */}
          <div
            style={{
              position: 'absolute',
              top: -30,
              left: -30,
              right: -30,
              bottom: -30,
              background: 'transparent',
              zIndex: 2,
            }}
            onMouseDown={handleStartHold}
            onMouseUp={handleEndHold}
            onMouseLeave={handleEndHold}
            onTouchStart={handleStartHold}
            onTouchEnd={handleEndHold}
          />
          <div
            className={`bg-cyan-300 rounded-3xl p-12 shadow-lg transition-all`}
            onMouseDown={handleStartHold}
            onMouseUp={handleEndHold}
            onMouseLeave={handleEndHold}
            onTouchStart={handleStartHold}
            onTouchEnd={handleEndHold}
            style={{ width: 540, height: 450, userSelect: 'none', touchAction: 'none' }}
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-tight mb-8">
                {playerName}
              </h2>
              
              {isHolding ? (
                <div className="flex justify-center">
                  <button className="px-8 py-4 bg-white border-2 border-gray-800 rounded-xl text-gray-800 font-medium text-xl">
                    {isCurrentPlayerImpostor ? (imposterHint ? `Imposter, Hint: ${imposterHint}` : 'Imposter') : word}
                  </button>
                </div>
              ) : hasRevealed ? (
                <div className="space-y-4">
                  <p className="text-gray-700 text-lg font-medium">
                    Hold to reveal the word
                  </p>
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full border-4 border-gray-700 flex items-center justify-center bg-gray-100">
                      {isMobile ? (
                        // Finger/touch icon for mobile
                        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                        </svg>
                      ) : (
                        // Mouse click icon for desktop
                        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-700 text-lg font-medium">
                    Hold to reveal the word
                  </p>
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full border-4 border-gray-700 flex items-center justify-center bg-gray-100">
                      {isMobile ? (
                        // Finger/touch icon for mobile
                        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                        </svg>
                      ) : (
                        // Mouse click icon for desktop
                        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Next Player (or Finish) button fixed at bottom; logic depends on player position and reveal */}
          <div style={{ position: 'fixed', bottom: 20, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
            {!hasRevealed ? (
              <div style={{ visibility: 'hidden' }}>
                <button className="px-8 py-4 bg-blue-500 text-white rounded-xl text-lg font-semibold" disabled>
                  Next Player
                </button>
              </div>
            ) : !isLastPlayer ? (
              <div onClick={onNextPlayer} style={{ cursor: 'pointer' }}>
                <button className="px-8 py-4 bg-blue-500 text-white rounded-xl text-lg font-semibold hover:bg-blue-600 transition-colors shadow-md">
                  Next Player
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <button onClick={onRevealMenu} className="px-8 py-4 bg-green-500 text-white rounded-xl text-lg font-semibold hover:bg-green-600 transition-colors shadow-md mb-4">
                  Start Game
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

