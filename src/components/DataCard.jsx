import React from 'react'
import '../styles/Dashboard.css'

const DataCard = ({ data, index }) => {
  // Helper function to format data
  const formatValue = (value) => {
    if (value === null || value === undefined) return 'N/A'
    if (typeof value === 'object') return JSON.stringify(value)
    return String(value)
  }

  // Extract first 5 key-value pairs
  const entries = Object.entries(data).slice(0, 5)

  return (
    <div className="data-card">
      <div className="card-header">
        <h3 className="card-title">{data.title || data.name || `Item ${index + 1}`}</h3>
        <span className="card-badge">#{index + 1}</span>
      </div>

      <div className="card-content">
        {entries.map(([key, value]) => (
          <div key={key} className="card-field">
            <span className="card-label">{key}</span>
            <span className="card-value" title={formatValue(value)}>
              {formatValue(value).length > 40
                ? formatValue(value).substring(0, 40) + '...'
                : formatValue(value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DataCard