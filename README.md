# IMPOSTER WHO? - Game Menu Clone

A modern web clone of the IMPOSTER WHO? game menu built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Clean, minimalist design matching the original mobile app
- Responsive layout optimized for mobile devices
- Interactive settings cards:
  - **Players**: Display player names (Emma, Olivia, James, Andy)
  - **Categories**: Show selected categories
  - **Imposters**: Display imposter count
  - **Time Limit**: Toggle switch to enable/disable time limit
- Header with help (?) and settings (⚙️) buttons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
game/
├── src/
│   ├── components/
│   │   ├── SettingsCard.tsx
│   │   ├── PlayersCard.tsx
│   │   ├── CategoriesCard.tsx
│   │   ├── ImpostersCard.tsx
│   │   └── TimeLimitCard.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

