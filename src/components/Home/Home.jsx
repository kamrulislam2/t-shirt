import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const isExist = cart.find((cartTshirt) => cartTshirt._id === tshirt._id);
    if (isExist) {
      alert("Already added");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const removeFromCart = (id) => {
    const remaining = cart.filter((tshirt) => tshirt._id !== id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="tshirts-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
