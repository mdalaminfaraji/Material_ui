import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Authentication from './component/Authentication/Authentication.jsx';
import { ThemeProvider } from '@mui/material';
import { DashboardTheme } from './dashboardTheme.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:   <App />,
    children:[
      {
        path:'/authentication',
        element:<Authentication></Authentication>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={DashboardTheme}>
      <React.StrictMode>
     <RouterProvider router={router} />
  
   </React.StrictMode>
  </ThemeProvider>
,
)
