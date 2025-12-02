import SettingsCard from './SettingsCard'

interface ImpostersCardProps {
  imposters: number
  maxImposters: number
  onImpostersChange: (imposters: number) => void
}

export default function ImpostersCard({ imposters, maxImposters, onImpostersChange }: ImpostersCardProps) {
  const handleDecrement = () => {
    if (imposters > 1) {
      onImpostersChange(imposters - 1)
    }
  }

  const handleIncrement = () => {
    if (imposters < maxImposters) {
      onImpostersChange(imposters + 1)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Allow empty input while typing
    if (value === '') {
      onImpostersChange(0)
      return
    }
    const numValue = parseInt(value, 10)
    if (!isNaN(numValue) && numValue >= 1 && numValue <= maxImposters) {
      onImpostersChange(numValue)
    }
  }

  const handleBlur = () => {
    // Ensure valid value when input loses focus
    if (imposters < 1) {
      onImpostersChange(1)
    } else if (imposters > maxImposters) {
      onImpostersChange(maxImposters)
    }
  }

  return (
    <SettingsCard
      icon={
        <div className="w-6 h-6 flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            {/* Body */}
            <ellipse cx="12" cy="14" rx="5" ry="6" fill="#1F2937" />
            {/* Yellow Hat */}
            <path d="M7 8 L12 4 L17 8 L17 10 L7 10 Z" fill="#FCD34D" />
            {/* Visor */}
            <ellipse cx="12" cy="10" rx="5" ry="1.5" fill="#1F2937" />
          </svg>
        </div>
      }
      title="Imposters"
    >
      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrement}
          disabled={imposters <= 1}
          className="w-8 h-8 flex items-center justify-center bg-gray-300 text-white rounded-lg text-lg font-medium hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <input
          type="text"
          value={imposters}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-16 px-3 py-2 bg-gray-300 text-white rounded-lg text-sm font-medium text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleIncrement}
          disabled={imposters >= maxImposters}
          className="w-8 h-8 flex items-center justify-center bg-gray-300 text-white rounded-lg text-lg font-medium hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </SettingsCard>
  )
}

