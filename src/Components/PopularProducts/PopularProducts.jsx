import { useState } from "react"
import { useNavigation } from "react-router"

export default function PopularProducts({product}) {
    const {title,price,images,discountPercentage}= product
  return (
   <>
  
    <div className="flex flex-col justify-center items-center px-4 py-4 bg-[#FFFFFF] rounded-sm shadow-2xl shadow-[#FFFFFF] ">
        <div>
            <img src={images[0]} alt="" />
        </div>
        <h3 className="text-center">
            {title}
        </h3>
        <p>
           <span>${price}</span>
        </p>
    </div>
   </>
  )
}
