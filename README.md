# TrekBag - Your Travel Packing Assistant

A React application that helps you keep track of your travel packing list. Built for practice and to demonstrate React fundamentals including state management, context API, and hooks.

![TrekBag Screenshot](screenshot.png)

## Features

- Create and manage your travel packing checklist
- Mark items as packed/unpacked
- Sort items by packed status
- Add new items to your list
- Bulk actions: mark all as packed/unpacked, clear list, reset to defaults
- Persistent storage using localStorage to save your packing list between sessions

## Tech Stack

- React 18
- Vite
- React Context API for state management
- Local Storage for data persistence
- React Select for dropdown components
- CSS for styling

## Installation

1. Clone this repository
```bash
git clone https://github.com/yourusername/trekbag.git
cd trekbag
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

1. Create an optimized production build
```bash
npm run build
```

2. Preview the production build
```bash
npm run preview
```

## Project Structure

- `src/components` - React components
- `src/components/contexts` - Context providers
- `src/lib` - Utility functions, hooks, and constants
- `src/lib/constants.js` - Default items and other constants
- `src/lib/hooks.js` - Custom React hooks

## Learning Outcomes

This project demonstrates several key React concepts:

- Using React Context API for state management
- Working with React hooks (useState, useEffect, useContext, useMemo)
- Local storage for persistent data
- Component composition
- Handling form submissions
- List rendering and sorting
- Event handling

## License

MIT
