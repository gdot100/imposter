import SettingsCard from './SettingsCard'

interface CategoriesCardProps {
  currentWord?: string
  isWordRevealed?: boolean
}

export default function CategoriesCard({ currentWord, isWordRevealed }: CategoriesCardProps) {
  return (
    <SettingsCard
      icon={
        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
      }
      title="Words"
      onNavigate={() => console.log('Navigate to words')}
    >
      {currentWord && isWordRevealed ? (
        <div className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium">
          {currentWord}
        </div>
      ) : (
        <button className="px-4 py-2 bg-gray-300 text-white rounded-lg text-sm font-medium hover:bg-gray-400 transition-colors">
          All Words
        </button>
      )}
    </SettingsCard>
  )
}

