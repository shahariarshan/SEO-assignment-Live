import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader:  ()=>fetch('/Task.json')
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode  >
     <div>
     <RouterProvider router={router} />
     </div>
  </React.StrictMode>,
)
