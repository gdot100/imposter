import { useState, useRef, useEffect } from 'react'
import SettingsCard from './SettingsCard'

interface PlayersCardProps {
  players: string[]
  onPlayersChange: (players: string[]) => void
}

export default function PlayersCard({ players, onPlayersChange }: PlayersCardProps) {
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editValue, setEditValue] = useState('')
  const buttonRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({})
  const inputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({})
  const [buttonWidths, setButtonWidths] = useState<{ [key: number]: number }>({})
  const [isNewPlayer, setIsNewPlayer] = useState(false)

  const handleAddPlayer = () => {
    const newId = players.length
    const playerNumber = players.length + 1
    const newPlayerName = `Player ${playerNumber}`
    
    // Create a temporary hidden button to measure the actual width
    const tempButton = document.createElement('button')
    tempButton.className = 'px-4 py-2 pr-8 bg-gray-300 text-white rounded-lg text-sm font-medium'
    tempButton.textContent = newPlayerName
    tempButton.style.position = 'absolute'
    tempButton.style.visibility = 'hidden'
    tempButton.style.whiteSpace = 'nowrap'
    document.body.appendChild(tempButton)
    const measuredWidth = tempButton.offsetWidth
    document.body.removeChild(tempButton)
    
    setButtonWidths(prev => ({ ...prev, [newId]: measuredWidth }))
    const newPlayers = [...players, newPlayerName]
    onPlayersChange(newPlayers)
    setIsNewPlayer(true)
    setEditingId(newId)
    setEditValue(newPlayerName)
  }

  const handleStartEdit = (index: number) => {
    // Measure button width before switching to input
    const button = buttonRefs.current[index]
    if (button) {
      setButtonWidths(prev => ({ ...prev, [index]: button.offsetWidth }))
    }
    setIsNewPlayer(false)
    setEditingId(index)
    setEditValue(players[index])
  }

  const handleSaveEdit = (index: number) => {
    if (editValue.trim()) {
      const updatedPlayers = [...players]
      updatedPlayers[index] = editValue.trim()
      onPlayersChange(updatedPlayers)
    }
    setEditingId(null)
    setEditValue('')
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditValue('')
  }

  const handleDelete = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    const updatedPlayers = players.filter((_, i) => i !== index)
    onPlayersChange(updatedPlayers)
    if (editingId === index) {
      setEditingId(null)
      setEditValue('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter') {
      handleSaveEdit(index)
    } else if (e.key === 'Escape') {
      handleCancelEdit()
    }
  }

  // Select all text when a new player input is focused
  useEffect(() => {
    if (editingId !== null && isNewPlayer) {
      const input = inputRefs.current[editingId]
      if (input) {
        input.select()
        setIsNewPlayer(false)
      }
    }
  }, [editingId, isNewPlayer])

  return (
    <SettingsCard
      icon={
        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM10 11a5 5 0 00-5 5v2a1 1 0 001 1h8a1 1 0 001-1v-2a5 5 0 00-5-5z" />
          </svg>
        </div>
      }
      title="Players"
    >
      <div className="flex flex-wrap gap-2">
        {players.map((player, index) => (
          <div
            key={index}
            className="relative inline-flex items-center group"
          >
            {editingId === index ? (
              <input
                ref={(el) => { inputRefs.current[index] = el }}
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onFocus={(e) => {
                  if (isNewPlayer && index === editingId) {
                    e.target.select()
                    setIsNewPlayer(false)
                  }
                }}
                onBlur={() => handleSaveEdit(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="px-4 py-2 pr-8 bg-gray-300 text-white rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ width: buttonWidths[index] ? `${buttonWidths[index]}px` : 'auto' }}
                autoFocus
              />
            ) : (
              <button
                ref={(el) => { buttonRefs.current[index] = el }}
                onClick={() => handleStartEdit(index)}
                className="px-4 py-2 pr-8 bg-gray-300 text-white rounded-lg text-sm font-medium hover:bg-gray-400 transition-colors"
              >
                {player}
              </button>
            )}
            <button
              onClick={(e) => handleDelete(index, e)}
              className="absolute right-1 w-5 h-5 flex items-center justify-center text-white hover:text-red-300 transition-colors opacity-0 group-hover:opacity-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
        <button
          onClick={handleAddPlayer}
          className="px-4 py-2 bg-gray-300 text-white rounded-lg text-sm font-medium hover:bg-gray-400 transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Player
        </button>
      </div>
    </SettingsCard>
  )
}

