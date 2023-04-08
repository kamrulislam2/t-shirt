import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some product</p>;
  } else {
    message = (
      <div>
        <h3>Boroloxxxx</h3>
        <p>
          <small>Thanks for wasting your money</small>
        </p>
      </div>
    );
  }
  return (
    <div className="cart-container">
      <h2 className={cart.length === 1 ? "blue" : "green"}>
        Order Summary: {cart.length}
      </h2>
      <p className={`bold bordered ${cart.length === 3 ? "green" : "orange"}`}>
        Something
      </p>
      {cart.length > 2 ? (
        <span className="green">Aro kino</span>
      ) : (
        "Fokir manush tumi"
      )}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button
            onClick={() => removeFromCart(tshirt._id)}
            className="btn-dlt"
          >
            X
          </button>
        </p>
      ))}
      {cart.length === 2 && <p>Double Shot!!!</p>}
      {cart.length === 3 || <h3>3Ta to hoilo nah!!!</h3>}
    </div>
  );
};

export default Cart;
