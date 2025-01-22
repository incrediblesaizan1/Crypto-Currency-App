import { useState } from 'react'
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Coin from './pages/Coin';

function App() {

  
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
  },
  {
    path: "/dashboard",
    element:<Dashboard />,
  },
  {
    path:"/coin/:uuid",
    element:<Coin />,
  }
  
]);

  return (
    <div>
     <RouterProvider router={router} />
    </div>
  
  )
}

export default App
