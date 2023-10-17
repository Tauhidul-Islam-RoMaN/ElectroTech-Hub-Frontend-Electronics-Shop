import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import myCreatedRoute from './Components/Provider/Router';
import ApiContext from './Components/Provider/ApiContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiContext>
      <RouterProvider router={myCreatedRoute} >
      </RouterProvider>
    </ApiContext>
  </React.StrictMode>,
)
