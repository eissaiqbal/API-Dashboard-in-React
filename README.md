# API Dashboard in React


## ✨ Features

### Core Features
- ✅ **Real-time Data Fetching** - Fetch data from any API endpoint using Axios
- ✅ **React Hooks** - Custom `useFetch` hook for reusable data fetching logic
- ✅ **useEffect Lifecycle** - Proper component lifecycle management and cleanup
- ✅ **Loading States** - Smooth animated loading spinner while fetching data
- ✅ **Error Handling** - Graceful error messages with user-friendly UI
- ✅ **Responsive Design** - Mobile-first approach, works on all devices

### UI/UX Features
- 🎨 **Light/Dark Theme** - Toggle between light and dark modes with smooth transitions
- ☀️🌙 **Theme Icons** - Sun/Moon icons for intuitive theme switching
- 💾 **Theme Persistence** - Theme preference saved in localStorage
- 🎯 **Quick Presets** - Pre-configured API endpoints for quick testing
- 📱 **Mobile Optimized** - Fully responsive on mobile, tablet, and desktop
- ✨ **Professional UI** - Modern design with smooth animations and transitions

### Advanced Features
- 📦 **PWA Ready** - Web manifest and favicon for app-like experience
- 🔄 **Manual Refresh** - Reload data with a single click
- 🎴 **Card Layout** - Beautiful card-based data display
- 🔍 **Data Display** - Shows first 5 key-value pairs with truncation
- 📊 **Summary Stats** - Display total items count

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend Framework** | React 18.2.0 |
| **Build Tool** | Vite 4.5.14 |
| **API Client** | Axios 1.6.0 |
| **Styling** | CSS3 (Custom, No CSS-in-JS) |
| **Package Manager** | npm |
| **Node Version** | 14.0+ |

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Git**

### Step 1: Clone the Repository

```bash
git clone https://github.com/eissaiqbal/API-Dashboard-in-React.git
cd API-Dashboard-in-React
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Verify File Structure

Ensure your project structure looks like this:

```
API-Dashboard-in-React/
├── index.html                    ← Root entry point
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
├── public/
│   ├── favicon.svg
│   ├── site.webmanifest
│   └── manifest.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Header.jsx            (Theme toggle, branding)
    │   ├── Dashboard.jsx         (Main dashboard container)
    │   ├── DataCard.jsx          (Individual data display)
    │   └── LoadingSpinner.jsx    (Loading indicator)
    ├── hooks/
    │   └── useFetch.js           (Custom API hook)
    └── styles/
        ├── App.css               (App-level styles)
        ├── Dashboard.css         (Dashboard & cards)
        └── theme.css             (Theme switching)
```

### Step 4: Start Development Server

```bash
npm run dev
```

You should see:
```
  VITE v4.5.14  ready in 237 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Step 5: Open in Browser

Navigate to: **http://localhost:5173/**

---

## 🗂 Project Structure

### Root Files

```
index.html              Main HTML entry point for Vite
package.json            Project dependencies and scripts
vite.config.js          Vite configuration
.gitignore              Git ignore file
README.md               This file
```

### `/public` - Static Assets

```
favicon.svg             SVG favicon with gradient design
site.webmanifest        PWA web app manifest
manifest.json           Legacy manifest file
```

### `/src` - Source Code

#### `main.jsx`
React DOM rendering entry point. Mounts the root App component.

#### `App.jsx`
Main application component that combines Header and Dashboard.

```jsx
import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="app">
      <Header />
      <Dashboard />
    </div>
  )
}
```

#### `index.css`
Global styles, CSS variables, and theme variables.

```css
:root {
  --primary-color: #0066cc;
  --text-primary: #1a1a1a;
  /* ... more variables */
}
```

### `/src/components`

#### `Header.jsx` (98 lines)
- Displays app branding
- Theme toggle button (Sun/Moon icon)
- Theme persistence with localStorage
- Sticky header with gradient background

#### `Dashboard.jsx` (180 lines)
- API URL input form
- Quick preset buttons (Posts, Users, Comments, Albums)
- Data fetching and display logic
- Error handling and dismissal
- Refresh functionality
- Empty state messaging

#### `DataCard.jsx` (45 lines)
- Individual data item display
- Card-based layout with hover effects
- Displays first 5 key-value pairs
- Badge showing item number
- Responsive grid layout

#### `LoadingSpinner.jsx` (35 lines)
- Animated loading spinner
- Loading text message
- Centered container
- Smooth CSS animations

### `/src/hooks`

#### `useFetch.js` (40 lines)
Custom React hook for API data fetching:

```javascript
const { data, loading, error, refetch } = useFetch(url)
```

**Features:**
- Loading state management
- Error handling with timeout
- Automatic refetch on URL change
- Manual refetch function
- Axios HTTP client

### `/src/styles`

#### `App.css`
- App container styles
- Max-width layout constraint
- Responsive padding

#### `Dashboard.css`
- Card grid layout (CSS Grid)
- Form styles (input, buttons)
- Error message styling
- Empty state styling
- Responsive breakpoints

#### `theme.css`
- Light theme variables
- Dark theme variables
- CSS variable overrides for dark mode

---

## 🚀 Usage Guide

### 1. **Viewing Data with Presets**

The dashboard comes with 4 preset APIs:

- **Posts** - Blog posts data
- **Users** - User profile data
- **Comments** - Comment threads
- **Albums** - Photo album metadata

Simply click any preset button to load that data.

### 2. **Fetching from Custom APIs**

```
1. Enter API URL in the input field
2. Click "Fetch Data" button
3. Wait for data to load
4. Browse results in card layout
```

**Example URLs:**
```
https://jsonplaceholder.typicode.com/users
https://api.example.com/data
https://restapi.example.com/items
```

### 3. **Switching Themes**

Click the **Sun/Moon icon** in the top-right corner to toggle:
- ☀️ **Light Mode** - White background, dark text
- 🌙 **Dark Mode** - Dark background, light text

Your theme preference is automatically saved.

### 4. **Refreshing Data**

Click the **🔄 Refresh** button to reload the current API data.

### 5. **Viewing Card Details**

Each card displays:
- Item title/name
- Item number badge (#1, #2, etc.)
- First 5 data fields with values
- Hover effect for interactivity

---

## 📚 Learning Outcomes

This project demonstrates:

### ✅ React Fundamentals
- Functional components and JSX
- Component composition and reusability
- Props passing and management
- State management with hooks

### ✅ React Hooks
- **`useState`** - For state management
- **`useEffect`** - For lifecycle operations and side effects
- **Custom Hooks** - Creating reusable `useFetch` hook
- Hook cleanup and dependencies

### ✅ Lifecycle Management
- Component mounting and unmounting
- Dependency array usage
- Cleanup functions
- Effect timing and optimization

### ✅ API Integration
- HTTP requests with Axios
- Promise handling and async/await
- Error handling and validation
- Loading states and user feedback
- Timeout and abort handling

### ✅ Modern CSS
- CSS Variables (custom properties)
- CSS Grid for layouts
- Media queries for responsiveness
- Theme switching without re-renders
- Smooth animations and transitions

### ✅ Best Practices
- Component folder structure
- Separation of concerns
- Reusable custom hooks
- Error boundaries
- Accessibility considerations
- Performance optimization

---

## 🔌 API Integration

### Custom Hook: `useFetch`

```javascript
import { useFetch } from './hooks/useFetch'

const MyComponent = () => {
  const { data, loading, error, refetch } = useFetch(
    'https://api.example.com/data'
  )

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />
  
  return <DataDisplay data={data} onRefresh={refetch} />
}
```

### Supported Features
- ✅ GET requests
- ✅ Timeout handling (10 seconds)
- ✅ Error response parsing
- ✅ Automatic retry on URL change
- ✅ Manual refetch capability

### Error Handling Example

```javascript
const { error } = useFetch(url)

if (error) {
  console.log(error.message)  // Error message
  console.log(error.status)   // HTTP status code
}
```

---

## 📊 Responsive Breakpoints

The application is fully responsive:

| Breakpoint | Device | Layout |
|-----------|--------|--------|
| **1200px+** | Desktop | 3-column grid |
| **768px - 1199px** | Tablet | 2-column grid |
| **< 768px** | Mobile | 1-column grid |

All styles adapt automatically using CSS media queries.

---

## 🎨 Theming System

### Using CSS Variables

The app uses CSS custom properties for easy theming:

```css
/* Light Theme (Default) */
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  --card-bg: #ffffff;
}

/* Dark Theme */
body.dark-theme {
  --bg-primary: #121212;
  --text-primary: #f5f5f5;
  --card-bg: #2a2a3a;
}
```

### Adding Custom Colors

Edit `src/styles/theme.css` to customize colors:

```css
:root {
  --primary-color: #0066cc;      /* Change primary color */
  --secondary-color: #f0f4f8;    /* Change secondary color */
  /* ... etc */
}
```

---

## 🏗 Building for Production

### Build the Project

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

This serves the production build locally at `http://localhost:4173/`

### Deployment Options

#### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

#### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Deploy to GitHub Pages
1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repo-name/'
})
```
2. Run: `npm run build`
3. Push to GitHub and enable GitHub Pages

---

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install

# Update dependencies
npm update
```

---

## 📱 PWA Features

This project is PWA-ready with:
- ✅ Web App Manifest (`site.webmanifest`)
- ✅ Custom Favicon (`favicon.svg`)
- ✅ Theme Color Support
- ✅ Apple Touch Icon
- ✅ Mobile Web App Capable

Users can install this as a native app on:
- 📱 iOS (Home screen shortcut)
- 🤖 Android (Install prompt)
- 💻 Windows/Mac (Desktop app)

---

## 🐛 Troubleshooting

### Problem: 404 Error on Load
**Solution:** Make sure `index.html` is in the project root, not in `public/`

### Problem: Module not found
**Solution:** Run `npm install` again
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problem: Port already in use
**Solution:** Use a different port
```bash
npm run dev -- --port 3000
```

### Problem: Changes not reflecting
**Solution:** Clear browser cache and hard refresh (Ctrl+Shift+R)

### Problem: Theme not persisting
**Solution:** Check localStorage is not disabled in browser settings

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style
- Use functional components only
- Follow React hooks best practices
- Use meaningful variable names
- Add comments for complex logic
- Ensure responsive design

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 👨‍💻 Author

**Created by:** Eissa Iqbal



---
