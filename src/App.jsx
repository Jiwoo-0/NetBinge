import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Header from './components/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
