import React from 'react'
import ReactDOM from 'react-dom/client'
import App  from './app'
import {BrowserRouter} from 'react-router-dom';


console.log("Ryuk Best Dog!!!");


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </React.StrictMode>
)