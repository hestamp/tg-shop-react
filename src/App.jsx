import React from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useTelegram } from './hooks/useTelegram'

import Forma from './components/Form/Forma'
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'

function App() {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route key="1" path="/" index element={<ProductList />} />
        <Route key="2" path="/form" element={<Forma />} />
      </Routes>
    </div>
  )
}

export default App
