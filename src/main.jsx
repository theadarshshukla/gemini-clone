import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from "./context/Context.jsx";

// Inspect Element, Right Click, aur Shortcuts disable karne ke liye code
if (typeof window !== 'undefined') {
  // 1. Context Menu (Right Click) disable karein
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  // 2. DevTools ke keyboard shortcuts disable karein
  document.addEventListener('keydown', (e) => {
    // F12 key
    if (e.key === 'F12') {
      e.preventDefault();
    }
    // Ctrl + Shift + I / J / C
    if (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
      e.preventDefault();
    }
    // Ctrl + U (View Source Code)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
    }
    // Ctrl + S (Save Page)
    if (e.ctrlKey && (e.key === 'S' || e.key === 's')) {
      e.preventDefault();
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)

