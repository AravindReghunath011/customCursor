import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cursor from './component/cursor'
import Loader from './component/Loader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='loader-animation'>

    <Loader/>
    </div>
      {/* <Cursor/> */}
    </>
  )
}

export default App
