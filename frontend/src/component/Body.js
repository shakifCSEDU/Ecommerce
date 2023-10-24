import React, { useEffect, useState } from "react";
//import products from "./../products";
import axios from 'axios';
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [products,setProducts] = useState([]);

  const getAllProducts = async ()=>{
    try{
      const {data} = await axios.get('http://localhost:8000/api/products');
      setProducts(data);
    }catch(error){
      console.log(error);
    } 
  }
  useEffect(()=>{
    getAllProducts();
  },[]);

  return (
    <div className="bg-gray-50">
      <h1>Latest Product</h1>

      <div className="flex flex-wrap">
        {products.map((product) => {
          return (

            <Link to={"/product/"+product._id}>
            <ProductCard
              key={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
            />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
