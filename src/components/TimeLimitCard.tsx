import SettingsCard from './SettingsCard'

interface TimeLimitCardProps {
  enabled: boolean
  timeLimit: number
  onEnabledChange: (enabled: boolean) => void
  onTimeLimitChange: (timeLimit: number) => void
}

export default function TimeLimitCard({ enabled, timeLimit, onEnabledChange, onTimeLimitChange }: TimeLimitCardProps) {
  return (
    <SettingsCard
      icon={
        <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      }
      title="Time Limit"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-gray-700 font-medium">{enabled ? 'Enabled' : 'Disabled'}</p>
          <button
            onClick={() => onEnabledChange(!enabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'bg-blue-500' : 'bg-gray-300'
              }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
            />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700 text-sm">Time:</span>
          <input
            type="number"
            min="1"
            max="300"
            value={timeLimit}
            onChange={(e) => onTimeLimitChange(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
          />
          <span className="text-gray-600 text-sm">seconds</span>
        </div>
      </div>
    </SettingsCard>
  )
}

