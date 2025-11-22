import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Furnitures from './Components/Furnitures/Furnitures.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    Component: App,
    children:[
      {
        path:'/',
        loader:()=> fetch('https://dummyjson.com/products?limit=20'),
        Component: Home
      },
      {
        path:'furnitures',
        Component: Furnitures
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
