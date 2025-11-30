import { useState } from "react"
import {getCart} from '../utilities/localStorage'
import CartContent from "./CartContent";

export default function Cart() {
    const [cart ,setCart] = useState([]);
    useState(()=>{
        setCart(getCart())
    },[])
    const handleDelete = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const filtered = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(filtered));
    setCart(filtered); 
};
    console.log(cart)
  return (
    <div className="mt-20 container mx-auto">
       {cart.map(c => <CartContent key={c.id} product={c} handleDelete={handleDelete}></CartContent>)}
    </div>
  )
}
