import React from "react";
import "./Product.css";
// import "../../addToCardComponent";

const Product = (props) => {
  const { id, name, price, category, ratings, img } = props.product;

  let addToCard = props.addToCard;

  return (
    <div className="product">
      <img src={img} alt="" className="img" />
      <div className="datiles">
        <h3>{name}</h3>
        <h3>Price: $ {price}</h3>
        <h5>category {category}</h5>
        <h4 className="rating">ratings {ratings} Star</h4>
      </div>
      <button className="btn" onClick={() => addToCard(props.product)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
