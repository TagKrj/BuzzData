# GourmetReserve

Restaurant management system built with React + Vite + Tailwind CSS.

## Prerequisites

- **Node.js**: 18.0.0 or higher
- **npm**: Latest version

## Setup Instructions

### 1. Install Node.js and npm
Download and install Node.js from [nodejs.org](https://nodejs.org/)

### 2. Create Vite Project
```bash
npm create vite@latest
```
- Project name: `GourmetReserve`
- Select framework: **React**
- Select variant: **JavaScript**

### 3. Navigate to Project Directory
```bash
cd GourmetReserve
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Install Tailwind CSS
```bash
npm install tailwindcss @tailwindcss/vite
```

### 6. Configure Tailwind CSS

Create `tailwind.config.js` in the root directory:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 7. Update Vite Configuration

Add Tailwind to `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist'
  }
})
```

### 8. Add Tailwind Directives

Add to `src/index.css`:
```css
@import "tailwindcss";
```

### 9. Start Development Server
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- **React**: 18.x
- **Vite**: 5.x
- **Tailwind CSS**: 3.x
- **JavaScript**: ES2023+
