import React from "react";
import './style.css'
export default function ProductCardBasket({countCart = 0,srcImg ='',titleCart = '',price=0,onClick}) {
  return (
    <div className={"cart"}>
     
      <div className={"cart-main"}>
        <div className={"cart-img"}>
          <img
            src={srcImg}
            alt="dress1"
          />
        </div>
        <div>
          <p>{titleCart}</p>
          <span className={"cart-remove"}>
            <p>{price} * {countCart}</p>
            <button onClick={onClick} className={"btn-remove"}>Remove</button>
          </span>
        </div>
      </div>
   
    </div>
  );
}
