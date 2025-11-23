import ProductSection from "../ProductSection/ProductSection";
import { useLoaderData, useNavigation } from "react-router";
import { useState } from "react";

export default function Shop() {
     const products = useLoaderData()
  const [category, setCategory] = useState('')
  const filterProduct =
  category === '' ?
  products.products : 
  products.products.filter(item => item.category.toLowerCase() === category.toLowerCase());
  const finalProducts = filterProduct;
  const categoryHandle = (category) => {
    setCategory(category)
  }
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  return (
    <div>
        <ProductSection  
             category={category} 
             categoryHandle={categoryHandle}
             finalProducts={finalProducts}
             isLoading={isLoading}
             ></ProductSection>
    </div>
  )
}
