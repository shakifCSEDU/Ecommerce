import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between bg-gray-500 rounded-sm">
      <Link to="/">
        <h1 className="text-2xl font-bold p-5 text-white">Shop</h1>
      </Link>
      <div className="flex">
        <div className="flex p-2">
          <Link to="/cart">
            <img
              alt="cart-icon"
              className="w-10"
              src="data:image/jpeg;base64,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"
            />
            <h1 className="pt-3">Cart</h1>
          </Link>
        </div>

        <div className="flex p-2">
          <img
            className="w-10"
            alt="signIn-icon"
            src="data:image/jpeg;base64,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"
          />
          <h1>Sign in</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
