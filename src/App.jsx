import {  useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import init from "../build/ascDebug.wasm?init"
import './App.css'
// import "./test.js"
// import "./object.js"
// import "./memory.js"
// import "./script/golang"
import "./script/rust"

function App() {
  const [count, setCount] = useState(0)
  init().then((instance) => {
    // console.log(instance)
    // const r = instance.exports.con();
    // console.log("Result:", r)
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
