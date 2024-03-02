import React from "react";
import { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import "./Checkout"
function Product({ id, title, image, price, description1,description2, description3,description4, description5,description6, description7 , rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        description1:description1,
        description2:description2,
        description3:description3,
        description4:description4,
        description5:description5,
        description6:description6,
        description7:description7,
        rating: rating,
      },
    });
  };
 
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="info__container">
        <div className="product__info">
          <p>{title}</p>
           <p className="product__price">
           <strong>----</strong>
            <small>.lei</small>
          </p>
          <div className="product__rating">
            
            </div>
        </div>
        <Link to='/Checkout' style={{ textDecoration: 'none' }}>
      <button onClick={addToBasket} className="Button"><p>Detalii produs</p></button>
      </Link>
      </div>
    </div>
  );
}

export default Product;
