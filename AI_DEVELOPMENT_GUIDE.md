# AI Development Guide - Imposter Who? Game

## Project Overview

**Imposter Who?** is a modern web-based clone of the popular mobile game where players guess words based on psychological arousal levels. The application is built as a single-page React application with TypeScript, featuring a clean, minimalist design optimized for mobile devices.

### Game Concept
- **Players**: 2-8 players can participate
- **Imposters**: 1 or more players are randomly assigned as "imposters"
- **Word Selection**: Words are selected using weighted random selection based on arousal values from psychological research
- **Gameplay**: Players take turns holding to reveal their word. Regular players see a real word, imposters see "Imposter" or get hints
- **Objective**: Imposters try to blend in while regular players identify who the imposters are

## Architecture & Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling
- **ESLint** for code quality

### Key Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `@vitejs/plugin-react`: ^4.2.1
- `tailwindcss`: ^3.4.0
- `typescript`: ^5.2.2
- `vite`: ^7.2.2

### Build Configuration
- **Target**: ES2020
- **Module System**: ESNext
- **JSX**: React JSX transform
- **Base Path**: `/imposter/` (configured for GitHub Pages)

## Project Structure

```
game/
├── src/
│   ├── components/
│   │   ├── CategoriesCard.tsx     # Displays current word (when revealed)
│   │   ├── GameScreen.tsx         # Main gameplay screen with hold-to-reveal
│   │   ├── ImposterHintCard.tsx   # Toggle for imposter hints feature
│   │   ├── ImpostersCard.tsx      # Controls number of imposters
│   │   ├── PlayersCard.tsx        # Manages player list with add/edit/delete
│   │   ├── SettingsCard.tsx       # Reusable card component for settings
│   │   └── TimeLimitCard.tsx      # Placeholder for time limit feature
│   ├── App.tsx                    # Main application component
│   ├── main.tsx                   # React entry point
│   ├── index.css                  # Global styles and Tailwind imports
│   └── words.js                   # Word database with psychological metrics
├── server/                        # Empty server directory (frontend-only)
├── public/                        # Static assets
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.ts                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
└── tsconfig.json                  # TypeScript configuration
```

## Core Components Documentation

### App.tsx (Main Application)

**State Management:**
- `players`: Array of player names (default: ['Emma', 'Olivia', 'James', 'Andy'])
- `imposters`: Number of imposters (1 to maxImposters)
- `isGameStarted`: Boolean for game state
- `currentPlayerIndex`: Current player in rotation
- `currentWord`: Selected word for current round
- `impostorIndices`: Array of player indices who are imposters
- `imposterHintEnabled`: Toggle for hint system
- `imposterHints`: Object mapping player indices to hint strings

**Key Functions:**
- `selectWeightedWord()`: Selects words based on arousal values
- `handleStartGame()`: Initializes new game round
- `handlePlayersChange()`: Manages player list with imposter count adjustment
- `handleNextPlayer()`: Cycles through players
- `handleResetGame()`: Resets all state to defaults

### GameScreen.tsx

**Props:**
```typescript
interface GameScreenProps {
  onClose: () => void
  playerName: string
  word: string
  onNextPlayer: () => void
  onWordRevealed?: () => void
  isLastPlayer?: boolean
  onRevealMenu?: () => void
  isCurrentPlayerImpostor?: boolean
  imposterHint?: string
}
```

**Features:**
- Hold-to-reveal interaction (touch and mouse support)
- Mobile/desktop adaptive UI
- Conditional display for imposters vs regular players
- Navigation between players and final reveal

### PlayersCard.tsx

**Features:**
- Add/remove players dynamically
- Inline editing of player names
- Automatic naming for new players (Player 1, Player 2, etc.)
- Width preservation during edit mode
- Keyboard shortcuts (Enter to save, Escape to cancel)

### Word Selection System

**Data Structure:**
```typescript
interface WordData {
  word: string
  no: number
  valence: { mean: number; sd: number }
  arousal: { mean: number; sd: number }
  dominance: { mean: number; sd: number }
  word_frequency: string | number
}
```

**Algorithm:**
1. Calculate total weight as sum of all arousal means
2. Generate random number between 0 and total weight
3. Iterate through words, subtracting arousal values until random number is reached

## Development Workflow

### Getting Started
```bash
npm install
npm run dev
# App runs on http://localhost:5173
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality
- TypeScript strict mode enabled
- ESLint for code linting
- No unused variables/parameters allowed

## Component Patterns & Conventions

### SettingsCard Component
Reusable wrapper for all setting cards:
```typescript
interface SettingsCardProps {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}
```

### State Management Patterns
- Local component state for UI interactions
- Props drilling for game state (consider Context API for larger scale)
- useEffect for side effects and state synchronization

### Styling Conventions
- Tailwind CSS utility classes
- Responsive design with mobile-first approach
- Consistent color scheme (gray-200 background, blue buttons)
- Shadow and hover effects for interactive elements

## Game Logic & Rules

### Imposter Assignment
- Randomly selected based on player count
- Minimum 1 imposter, maximum (playerCount - 1)
- Indices stored in `impostorIndices` array

### Word Reveal Flow
1. Player holds button to reveal word
2. Regular players see the selected word
3. Imposters see "Imposter" or hint if enabled
4. Player taps "Next Player" to continue
5. Last player triggers final reveal menu

### Hint System
- Optional feature toggled via ImposterHintCard
- Hints randomly assigned from predefined categories:
  - Food, Animal, Vehicle, Building, Object, Color, Weather
  - Music, Profession, Sport, Nature, Technology, Emotion
  - Shape, Number, Time

## Testing Considerations

### Manual Testing Checklist
- [ ] Player addition/removal with imposter count adjustment
- [ ] Word selection and weighted random algorithm
- [ ] Hold-to-reveal interaction on mobile and desktop
- [ ] Game flow: player rotation, final reveal
- [ ] Imposter hint system
- [ ] Edge cases: 2 players, max imposters, empty player list

### Component Testing
- Test state transitions in App.tsx
- Test hold gesture detection in GameScreen
- Test player management in PlayersCard
- Test word selection algorithm

## Deployment & Build

### Production Build
```bash
npm run build
# Output in dist/ directory
```

### GitHub Pages Deployment
- Configured with base path `/imposter/`
- Static hosting ready

## Future Enhancements

### Planned Features
- Time limit functionality (currently placeholder)
- Categories system implementation
- Sound effects and animations
- Game statistics and history

### Technical Improvements
- State management with Context API or Redux
- Unit tests with Jest/React Testing Library
- E2E tests with Playwright or Cypress
- Performance optimization for word selection

## Common Issues & Solutions

### Word Selection Not Working
- Ensure words.js is properly imported
- Check that arousal values are numbers
- Verify weighted selection algorithm logic

### Mobile Touch Issues
- Use `touchAction: 'none'` to prevent scrolling
- Handle both touch and mouse events
- Test on actual mobile devices

### Player Count Edge Cases
- Always maintain at least 1 player
- Adjust imposter count when players are removed
- Handle restoration of imposter count when players are added back

## Contributing Guidelines

### Code Style
- Use TypeScript for all new code
- Follow React functional component patterns
- Use descriptive variable and function names
- Add JSDoc comments for complex functions

### Component Development
1. Create component in appropriate directory
2. Define clear TypeScript interfaces
3. Implement responsive design
4. Test on multiple screen sizes
5. Add to App.tsx integration

### Git Workflow
- Feature branches for new functionality
- Descriptive commit messages
- Pull requests for code review
- Keep main branch stable

---

*This guide should be updated as the codebase evolves. Last updated: December 2025*
