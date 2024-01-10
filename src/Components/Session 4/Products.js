import React, {useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
const Products = () => {
    const [products , setProducts] = useState([])
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  });
  return (
    <>
    <div className="container">
        {products.map((el) => (
          <div key={el.id} className="product">
            <p>{el.title}</p>
            <img src={el.thumbnail} alt={el.title}/> 
            <p>{el.description}</p>
            <button>Add to cart</button>
          </div>
        ))}
    </div>
    
    </>
  )
}
export default Products;