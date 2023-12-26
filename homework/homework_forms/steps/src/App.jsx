import { useState } from 'react'
import './App.css'
import StepsForm from './components/StepsForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StepsForm />
    </>
  )
}

export default App
