import { useState } from 'react'
import './App.css'
import Watches from './components/Watches'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Watches />
    </>
  )
}

export default App
