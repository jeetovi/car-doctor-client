import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import {
   
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Components/Routes/Route';
import AuthProvide from './Components/Providers/AuthProvide';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvide>
  <RouterProvider router={router} />
  </AuthProvide>
  </React.StrictMode>,
)
