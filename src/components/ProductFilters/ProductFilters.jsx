import React from "react";
import "./style.css"
export default function ProductFilters() {
  return (
    <div className="filters">
      <div className="product-count">6 Productds</div>
      <div className="product-order">
        <label htmlFor="order">Order</label>
        <select id="order">
          <option value="Latest">Latest</option>
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
      </div>
      <div className="product-filter">
        <label htmlFor="Filter">Filter</label>
        <select id="Filter">
          <option value="All">All</option>
          <option value="Xs">Xs</option>
          <option value="S">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">L</option>
        </select>
      </div>
    </div>
  );
}
