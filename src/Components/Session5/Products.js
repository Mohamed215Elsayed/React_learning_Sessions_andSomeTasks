import React from 'react'
import { Link,Outlet } from 'react-router-dom';
const Products = () => {
  return (
    <>
    <h1>Products</h1>
    <Link to={`new`} >NewProducts</Link>
    <Link to={`featured`} >FeaturedProducts</Link>
    <Outlet/>
    </>
  )
}

export default Products;