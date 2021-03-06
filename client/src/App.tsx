import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Slider from "@mui/material/Slider"
import { MenuList } from '@mui/material'
import MilkForm from './components/MilkForm'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <Slider defaultValue={50} aria-label="Default" 
          valueLabelDisplay="auto" min={0} max={100} value={count} onChange={(e, v) => { setCount(v as number) }} />
        </p>
        <MilkForm/>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
