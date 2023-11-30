import { useState } from 'react'
import './App.css'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import TheMain from './components/TheMain'

function App() {
  return (
    <>
      <TheHeader/>
      <TheMain/>
      <TheFooter/>
    </>
  )
}

export default App
