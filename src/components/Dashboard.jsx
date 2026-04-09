import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import DataCard from './DataCard'
import LoadingSpinner from './LoadingSpinner'
import '../styles/Dashboard.css'

const Dashboard = () => {
  const [apiUrl, setApiUrl] = useState('https://jsonplaceholder.typicode.com/posts')
  const [inputUrl, setInputUrl] = useState(apiUrl)
  const { data, loading, error, refetch } = useFetch(apiUrl)

  const apiPresets = [
    {
      name: 'Posts',
      url: 'https://jsonplaceholder.typicode.com/posts',
    },
    {
      name: 'Users',
      url: 'https://jsonplaceholder.typicode.com/users',
    },
    {
      name: 'Comments',
      url: 'https://jsonplaceholder.typicode.com/comments',
    },
    {
      name: 'Albums',
      url: 'https://jsonplaceholder.typicode.com/albums',
    },
  ]

  const handleUrlChange = (e) => {
    setInputUrl(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputUrl.trim()) {
      setApiUrl(inputUrl)
    }
  }

  const handlePresetClick = (url) => {
    setInputUrl(url)
    setApiUrl(url)
  }

  const handleDismissError = () => {
    setApiUrl('')
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2 className="dashboard-title">📊 Fetch Data from APIs</h2>
        <p className="dashboard-subtitle">
          Enter an API endpoint or choose a preset below
        </p>

        <form onSubmit={handleSubmit} className="url-form">
          <div className="form-group">
            <input
              type="url"
              value={inputUrl}
              onChange={handleUrlChange}
              placeholder="https://api.example.com/data"
              className="url-input"
            />
            <button type="submit" className="btn btn-primary">
              Fetch Data
            </button>
          </div>
        </form>

        <div className="preset-buttons">
          <p className="preset-label">Quick Presets:</p>
          <div className="button-group">
            {apiPresets.map((preset) => (
              <button
                key={preset.url}
                onClick={() => handlePresetClick(preset.url)}
                className={`btn btn-secondary ${
                  apiUrl === preset.url ? 'active' : ''
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <span>
            <span className="error-icon">⚠️</span>
            <strong>Error:</strong> {error.message}
          </span>
          <button
            className="error-close"
            onClick={handleDismissError}
            aria-label="Close error"
          >
            ✕
          </button>
        </div>
      )}

      {loading ? (
        <LoadingSpinner />
      ) : data && data.length > 0 ? (
        <>
          <div className="data-summary">
            <p>
              Showing <strong>{data.length}</strong> items from API
            </p>
            <button onClick={refetch} className="btn btn-primary">
              🔄 Refresh
            </button>
          </div>
          <div className="cards-grid">
            {data.map((item, index) => (
              <DataCard key={index} data={item} index={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <p className="empty-state-text">No data available</p>
          <p className="empty-state-description">
            Try entering a valid API URL or select a preset
          </p>
        </div>
      )}

      <style>{`
        .dashboard-header {
          margin-bottom: 40px;
        }

        .url-form {
          margin: 25px 0;
        }

        .form-group {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .url-input {
          flex: 1;
          min-width: 250px;
          padding: 12px 16px;
          border: 2px solid var(--border-color);
          border-radius: 8px;
          font-size: 1rem;
          background-color: var(--card-bg);
          color: var(--text-primary);
          transition: border-color 0.3s ease;
        }

        .url-input:focus {
          outline: none;
          border-color: #0066cc;
        }

        .url-input::placeholder {
          color: var(--text-secondary);
          opacity: 0.7;
        }

        .preset-buttons {
          margin-top: 25px;
        }

        .preset-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .button-group {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .btn.active {
          background: linear-gradient(135deg, #0066cc, #0052a3);
          color: white;
          border-color: #0066cc;
        }

        .data-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: var(--secondary-color);
          border-radius: 8px;
          margin-bottom: 30px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .data-summary strong {
          color: #0066cc;
        }

        @media (max-width: 768px) {
          .form-group {
            flex-direction: column;
          }

          .url-input {
            min-width: 100%;
          }

          .button-group {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }

          .data-summary {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .dashboard-title {
            font-size: 1.75rem;
          }

          .dashboard-subtitle {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Dashboard