import { NavLink } from "react-router";
import PopularProducts from "../PopularProducts/PopularProducts";
import { ClipLoader } from 'react-spinners';
export default function ProductSection(
    {
       category,
       finalProducts ,
       categoryHandle,
       isLoading
    }
) {
  return (
    <div className="container mx-auto bg-[#D9D9D9] p-2 md:p-11 mt-12 md:mt-18">
        <div>
          <h1 className="text-3xl text-center mb-5 md:mb-10">{category===''?'Popular':category} Products</h1>
        </div>
        <div className="flex gap-2 md:gap-5 text-[#666666] md:text-xl mb-10">
           <NavLink onClick={()=> categoryHandle('')}>All</NavLink>
           <NavLink onClick={()=>categoryHandle('Furniture')}>Furniture</NavLink>
           <NavLink onClick={()=>categoryHandle('Beauty')}>Beauty</NavLink>
           <NavLink onClick={()=>categoryHandle('Fragrances')}>Fragrances</NavLink>
           <NavLink onClick={()=>categoryHandle('Groceries')}>Groceries</NavLink>
        </div>
         {isLoading && 
            <ClipLoader className="ml-[50%]" color="#36d7b7" loading={isLoading} size={50} />}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 ">
           
            {finalProducts?.map(product => <PopularProducts key={product.id} product={product} ></PopularProducts>)}
      </div>
      </div>
  )
}
