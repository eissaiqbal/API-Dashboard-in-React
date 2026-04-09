import React from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Dashboard />
      </div>
    </div>
  )
}

export default App