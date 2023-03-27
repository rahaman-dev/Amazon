import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <img src={props.img} alt="" className="img" />
      <div className="datiles">
        <h3>{props.name}</h3>
        <h3>Price: $ {props.price}</h3>
        <h5>category {props.category}</h5>
        <h4 className="rating">ratings {props.ratings}</h4>
      </div>
      <button className="btn">Add To Cart </button>
    </div>
  );
};

export default Product;
