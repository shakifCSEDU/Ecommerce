import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product,setProduct] = useState({});
  
  const getOneProduct = async()=>{
    const {data} = await axios.get(`http://localhost:8000/api/products/${id}`);
    setProduct(data);
  }

  useEffect(()=>{
    getOneProduct();
  },[]);
  
  const  handleCart = ()=>{
    alert('button clicked');
  }

  return (
    <div className="m-2">
      <div className="flex m-10 rounded-lg bg-gray-50 shadow-md  m-2">
        <img 
        className="p-2  w-40 h-50 rounded-lg"
        alt="product-icon" 
        src={product.image} />
        <div className="mx-20">
          <h1 className=" text-2xl">{product.name}</h1>
          <hr className="py-2"/>
          <h1 className="text-xl">Price: {"$"+product.price} </h1>
          <hr/>
          <h1 className="py-2 text-ellipsis">Description: {product.description}</h1>
        </div>
      <div className="shadow-lg py-2 px-20 rounded-lg mx-5">
        <h1>Price {product.price}</h1>
        <h1>{product.countInStock>0?"In Stock":"Out of Stock"}</h1>
        <button className="bg-green-600 text-white p-2 my-4 rounded-lg" onClick={handleCart}>Add to Cart</button>
      </div>

      </div>
    </div>
  );
};

export default ProductPage;
