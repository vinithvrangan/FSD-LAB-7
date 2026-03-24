import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'aframe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
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
function ARScene() {
  return (
    <a-scene
      xr-mode="ar"
      renderer="colorManagement: true"
      embedded
      style={{ width: "100%", height: "80vh" }}
    >
      {/* 3D Box */}
      <a-box
        id="box"
        position="0 0 -0.8"
        color="#4CC3D9"
        scale="0.3 0.3 0.3"
      ></a-box>

      {/* Camera */}
      <a-entity camera look-controls></a-entity>
    </a-scene>
  );
}
function ARScene({ color }) {
  return (
    <a-scene
      xr-mode="ar"
      renderer="colorManagement: true"
      embedded
      style={{ width: "100%", height: "80vh" }}
    >
      <a-box
        id="box"
        position="0 0 -0.8"
        color={color}
        scale="0.3 0.3 0.3"
      />

      <a-entity camera look-controls />
    </a-scene>
  );
}

export default ARScene;
export default App
