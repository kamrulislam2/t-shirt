import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>
        <small>Granpa Money: {money}</small>
      </p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000 Taka</button>
      <section className="flex">
        <Cousin>Nabil</Cousin>
        <Cousin>Nabilaa</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
