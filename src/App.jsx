import { useState } from 'react'
import './App.css'
import Commmon from './Component/Commmon'
import { Routes, Route } from 'react-router-dom';
import Last from './Component/Last';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Commmon />} />
        <Route path="/main" element={<Last />} />
      </Routes>
    </>
  )
}

export default App
