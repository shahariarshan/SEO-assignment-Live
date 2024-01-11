import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader:  ()=>fetch('/Task.json')
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode  >
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
   
     
  </React.StrictMode>,
)
