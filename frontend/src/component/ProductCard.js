import React from "react";

const ProductCard = ({ name, image,price,description }) => {
  return (
    <div className="p-5 m-5 w-40  h-60 bg-white rounded-lg shadow-lg">
      <img className="w-full" alt="product-image" src={image} />
      <h1 className="text-black">{name}</h1>
      <h1 className= "text-lg text-gray-500">{"$"+price}</h1>
    </div>
  );
};

export default ProductCard;
