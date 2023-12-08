import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/home'

function App() {
  return (
      <div className='App'>
        <h1>Lugares que visitar en San Rafael</h1>
        <Home/>
        
      </div>
  )
}

export default App
