import React from "react";
import "./style.css"
export default function ProductFilters({filters ={size:null,price:null},setFilters,resultCount = 0}) {
  const hundleChange = (e) =>{
        setFilters({...filters,[e.target.name]:e.target.value})
  
  }
  return (
    <div className="filters">
      <div className="product-count">{resultCount} Productds</div>
      <div className="product-order">
        <label htmlFor="price" className="mr-2">Price</label>
        <select name={'price'} onChange={hundleChange} id="price">
          <option value="">Latest</option>
          <option value="-1">Lowest</option>
          <option value="1">Highest</option>
        </select>
     
      </div>
      <div className="product-filter">
        <label htmlFor="size"  className="mr-2">Size</label>
        <select name={'size'} onChange={hundleChange} id="size">
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
}
