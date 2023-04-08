import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ ring }) => {
  const isRing = useContext(RingContext);
  return (
    <div>
      <h2>Naimaaa</h2>
      <p>
        <small>Ring: {isRing}</small>
      </p>
    </div>
  );
};

export default Special;
