import React from "react";
import "./style.css";
function ProductCard({srcImg='',title = '',price = 0}) {
  return (
    <div className="card-product">
      <div className="card-img">
        <img
          src= {srcImg}
        />
      </div>
      <p className="card-text">
        <a href="#">{title}</a>
      </p>
      <div className="footer-card">
        <p>{price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
