import React from 'react'
import Home from './Home';
import './index.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div>
      <SpeedInsights/>
      <Home />
    </div>
  )
}

export default App;
