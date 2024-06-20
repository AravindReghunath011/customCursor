import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cursor from './component/cursor'
import Loader from './component/Loader'
import Helo from './component/Helo'
import Parallax from './component/Parallax'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Parallax/> 
    </>
  )
}

export default App
