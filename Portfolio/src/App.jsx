import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Home from './Home';
import './index.css';

function App() {
  return (
    <div>
      <SpeedInsights/>
      <Analytics/>
      <Home />
    </div>
  )
}

export default App;
