import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      
          {basket.slice(-1).map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              description1={item.description1}
              description2={item.description2}
              description3={item.description3}
              description4={item.description4}
              description5={item.description5}
              description6={item.description6}
              description7={item.description7}
              rating={item.rating}
            />
          ))}

        </div>
  );
}

export default Checkout;
