import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)  
/**  
 * the createRoot method takes an element as input.
 * 
 * App here is a component that is being rendered from App.jsx*
 * 
 * whatever component is passed into the render method, will be rendered
 * into the ELEMENT passed into the createRoot method (in this case
 *  <React.StrictMode>
    <App /> 
  </React.StrictMode> will be rendered inside the root div from index.html).

  SctrictMode is a wrapper component for highlighting potential problems in an application.
 */