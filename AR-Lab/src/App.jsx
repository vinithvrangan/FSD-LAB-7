import { useState } from 'react'
import 'aframe'
import './App.css'

function ARScene({ color }) {
  return (
    <a-scene
      xr-mode-ui="enabled: true"
      renderer="colorManagement: true"
      embedded
      style={{ width: "100%", height: "80vh", borderRadius: "12px", overflow: "hidden" }}
    >
      <a-box
        id="box"
        position="0 1.5 -2"
        color={color}
        scale="0.5 0.5 0.5"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 5000"
      />
      <a-sky color="#ECECEC" />
      <a-entity camera look-controls position="0 1.6 0"></a-entity>
    </a-scene>
  );
}

function App() {
  const [color, setColor] = useState("#4CC3D9");
  const colors = ["#4CC3D9", "#EF2D5E", "#FFC65D", "#7BC8A4", "#9370DB"];

  const changeColor = () => {
    const nextColor = colors[(colors.indexOf(color) + 1) % colors.length];
    setColor(nextColor);
  };

  return (
    <div className="app-container">
      <header>
        <h1>WebAR Lab</h1>
        <p>A-Frame + React Integration</p>
      </header>

      <div className="ar-container">
        <ARScene color={color} />
      </div>

      <div className="controls">
        <button className="primary-button" onClick={changeColor}>
          Change Box Color
        </button>
        <p className="status-text">
          Current Color: <span style={{ color }}>{color}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
