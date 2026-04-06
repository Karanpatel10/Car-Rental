import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AppProvider } from './AppContext.jsx'
import { MotionConfig } from "motion/react"
import {ReactLenis} from 'lenis/react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <MotionConfig viewport={{once:true}}>
        <ReactLenis root>
      <App />
      </ReactLenis> 
      </MotionConfig>
    </AppProvider>
  </BrowserRouter>
)
