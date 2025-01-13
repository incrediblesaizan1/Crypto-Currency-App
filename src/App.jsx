import { useState } from 'react'
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

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
  
]);

  return (
    <div>
     <RouterProvider router={router} />
    </div>
  
  )
}

export default App
