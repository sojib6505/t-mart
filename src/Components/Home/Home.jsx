import { useLoaderData, useNavigation } from "react-router";

import { useState } from "react";
import Banner from '../Banner/Banner'
import ProductSection from "../ProductSection/ProductSection";
import Footer from "../Footer/Footer";
export default function Home() {
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
      <Banner></Banner>
      <ProductSection  
      category={category} 
      categoryHandle={categoryHandle}
      finalProducts={finalProducts}
      isLoading={isLoading}

      ></ProductSection>
      <Footer></Footer>
    </div>
  )
}
