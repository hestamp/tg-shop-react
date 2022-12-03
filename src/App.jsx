import React from 'react'
const tg = window.Telegram.WebApp
import './App.css'
console.log(tg)
const onClose = () => {
  tg.close
}

function App() {
  return (
    <div className="App">
      <button onClick={onClose}>Закрити</button>
    </div>
  )
}

export default App
