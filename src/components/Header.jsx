import React, { useState, useEffect } from 'react'
import '../styles/theme.css'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark

    setIsDarkMode(shouldBeDark)
    applyTheme(shouldBeDark)
  }, [])

  const applyTheme = (isDark) => {
    const htmlElement = document.documentElement
    const bodyElement = document.body

    if (isDark) {
      bodyElement.classList.remove('light-theme')
      bodyElement.classList.add('dark-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      bodyElement.classList.remove('dark-theme')
      bodyElement.classList.add('light-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleTheme = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    applyTheme(newMode)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">API Dashboard in React</h1>
          <p className="header-subtitle">Fetch & Display Real-Time Data</p>
        </div>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? (
            <span className="theme-icon">☀️</span>
          ) : (
            <span className="theme-icon">🌙</span>
          )}
        </button>
      </div>

      <style>{`
        .header {
          background: linear-gradient(135deg, #0066cc, #0052a3);
          color: white;
          padding: 30px 20px;
          box-shadow: var(--shadow);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .header-content {
          flex: 1;
        }

        .header-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 5px 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .header-subtitle {
          font-size: 0.95rem;
          opacity: 0.9;
          margin: 0;
          font-weight: 400;
        }

        .theme-toggle {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.5rem;
        }

        .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.8);
          transform: scale(1.1) rotate(20deg);
        }

        .theme-icon {
          display: inline-block;
          animation: fadeInScale 0.3s ease;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.5) rotate(-180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @media (max-width: 768px) {
          .header {
            padding: 20px 15px;
          }

          .header-container {
            flex-direction: column;
            text-align: center;
          }

          .header-title {
            font-size: 1.5rem;
          }

          .header-subtitle {
            font-size: 0.85rem;
          }

          .theme-toggle {
            width: 45px;
            height: 45px;
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .header {
            padding: 15px 10px;
          }

          .header-title {
            font-size: 1.25rem;
          }

          .header-subtitle {
            font-size: 0.75rem;
          }

          .theme-toggle {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </header>
  )
}

export default Header