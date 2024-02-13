import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirstContextProvider } from './pages/context/FirstContextProvider.jsx'
import { AuthContextProvider } from './pages/context/Authcontext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider><FirstContextProvider>
    <App />
    </FirstContextProvider>

</AuthContextProvider>
    
)
