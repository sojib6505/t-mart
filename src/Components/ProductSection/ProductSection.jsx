import { NavLink } from "react-router";
import PopularProducts from "../PopularProducts/PopularProducts";
import { ClipLoader } from 'react-spinners';
import Loader from "../Loader/Loader";
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
           <NavLink onClick={()=> categoryHandle('')}  className={category === '' &&'border-blue-500 border-b-2 pb-1' }>All</NavLink>
           <NavLink onClick={()=>categoryHandle('Furniture')}  className={category === 'Furniture' &&'border-blue-500 border-b-2 pb-1'}>Furniture</NavLink>
           <NavLink onClick={()=>categoryHandle('Beauty')}  className={category === 'Beauty' &&'border-b-2 border-blue-500 pb-1' }>Beauty</NavLink>
           <NavLink onClick={()=>categoryHandle('Fragrances')} className={category === 'Fragrances' && 'border-b-2 border-blue-500 pb-1'}>Fragrances</NavLink>
           <NavLink onClick={()=>categoryHandle('Groceries')} className={category === 'Groceries'&&'border-b-2 border-blue-500 pb-1'}>Groceries</NavLink>
        </div>
         {isLoading && 
           <Loader></Loader>}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
  {finalProducts?.map((product, index) => (
    <div
      key={product.id}
      className="fadeInUp transition-transform duration-500 ease-out"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <PopularProducts product={product} />
    </div>
  ))}
</div>





      </div>
  )
}
