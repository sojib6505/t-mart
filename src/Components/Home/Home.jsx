import { NavLink, useLoaderData, useNavigation } from "react-router";
import Banner from "../Banner/Banner";
import PopularProducts from "../PopularProducts/PopularProducts";
import { useState } from "react";
import { ClipLoader } from 'react-spinners';

export default function Home() {
  const products = useLoaderData()
  const [category, setCategory] = useState('')
  const filterProduct =
  category === '' ?
  products.products : 
  products.products.filter(item => item.category.toLowerCase() === category.toLowerCase());
  const finalProducts = filterProduct;
  console.log(finalProducts)
  // console.log(filterProduct)
  const categoryHandle = (category) => {
    setCategory(category)
  }
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto bg-[#D9D9D9]  mt-24 p-11">
        
        <div>
          <h1 className="text-3xl text-center  mb-10">{category===''?'Popular':category} Products</h1>
        </div>
        <div className="flex gap-5 text-[#666666] text-xl mb-10">
           <NavLink onClick={()=> categoryHandle('')}>All</NavLink>
           <NavLink onClick={()=>categoryHandle('Furniture')}>Furniture</NavLink>
           <NavLink onClick={()=>categoryHandle('Beauty')}>Beauty</NavLink>
           <NavLink onClick={()=>categoryHandle('Fragrances')}>Fragrances</NavLink>
           <NavLink onClick={()=>categoryHandle('Groceries')}>Groceries</NavLink>
        </div>
         {isLoading && 
            <ClipLoader className="ml-[50%]" color="#36d7b7" loading={isLoading} size={50} />}
        <div className="grid grid-cols-2 md:grid-cols-4  gap-8 ">
           
            {finalProducts.map(product => <PopularProducts key={product.id} product={product} ></PopularProducts>)}
      </div>
      </div>
    </div>
  )
}
