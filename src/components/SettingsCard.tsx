import { ReactNode } from 'react'

interface SettingsCardProps {
  icon: ReactNode
  title: string
  children: ReactNode
  onNavigate?: () => void
}

export default function SettingsCard({ icon, title, children, onNavigate }: SettingsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            {icon}
          </div>
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
            {title}
          </h3>
        </div>
        {onNavigate && (
          <button onClick={onNavigate} className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

