import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="spinner-wrapper">
        <div className="spinner"></div>
        <p className="loading-text">Loading data...</p>
      </div>

      <style>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }

        .spinner-wrapper {
          text-align: center;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid var(--border-color);
          border-top: 4px solid #0066cc;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .loading-text {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default LoadingSpinner