
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Furnitures from './Components/Furnitures/Furnitures.jsx'
import Shop from './Components/Shop/Shop.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import Cart from './Components/Cart/Cart.jsx'
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
      },
      {
        path:'shop',
         loader:()=> fetch('https://dummyjson.com/products?limit=20'),
        Component: Shop
      },
     {
  path: 'product/:id',
  loader: async ({ params }) => {
     console.log(params)
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    return res.json();
   
  },
  Component: ProductDetails
},
{
  path: 'cart',
  Component: Cart
}
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
