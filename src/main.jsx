import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   <GoogleOAuthProvider clientId='733052990979-eh8b1vbmkfi0ujjskq15bhtpr6k33u3s.apps.googleusercontent.com'> 
    <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
