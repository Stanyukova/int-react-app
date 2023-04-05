import React from 'react'
import ProductList from '../components/ProductList'

const Article : React.FC= () => {
 
  return (
  <div className="container">
     {/* {items.map(item =>    <ProductList key={item.id} {...item} /> )} */}
       <ProductList />
        
  </div>
  )
}

export default Article