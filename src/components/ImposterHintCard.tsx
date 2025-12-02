import SettingsCard from './SettingsCard'

interface ImposterHintCardProps {
  enabled: boolean;
  onEnabledChange: (enabled: boolean) => void;
}

export default function ImposterHintCard({ enabled, onEnabledChange }: ImposterHintCardProps) {

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
      title="Imposter Hint"
    >
      <div className="flex items-center justify-between">
        <p className="text-gray-700 font-medium">{enabled ? 'Enabled' : 'Disabled'}</p>
        <button
          onClick={() => onEnabledChange(!enabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            enabled ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </SettingsCard>
  )
}

