import React from 'react'
import ProductList from '../components/ProductList'
import { useDispatch, useSelector } from "react-redux";
const Article = () => {
 
  return (
  <div className="container">
     {/* {items.map(item =>    <ProductList key={item.id} {...item} /> )} */}
       <ProductList />
        
  </div>
  )
}

export default Article