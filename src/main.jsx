import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes.jsx';
import ReactDOM from "react-dom/client";


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={routes} />

  </StrictMode>,
)
