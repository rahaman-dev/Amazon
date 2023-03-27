import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./AppProducts.css";

const AllProdcuts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("../../../public/fakeData/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="flex">
      <div className="products">
        <div className="allproducts">
          {products.map((product) => (
            <Product
              img={product.img}
              name={product.name}
              price={product.price}
              category={product.category}
              ratings={product.ratings}
            ></Product>
          ))}
        </div>
      </div>
      <div className="siderBar">
        <h2
          style={{ textAlign: "center", color: "#565753", marginTop: "20px" }}
        >
          Order Summary
        </h2>
        <p>
          <span>Selected Items:</span>
        </p>
        <p>
          <span>Total Price: $</span>
        </p>
        <p>
          <span>Total Shipping Charge: $</span>
        </p>
        <p>
          <span>Tax: $</span>
        </p>
        <p>
          <span>Grand Total: $</span>
        </p>
        <p style={{ marginTop: "20px" }}>
          <button style={{ backgroundColor: "red", width: "200px" }}>
            Clear Cart
          </button>
        </p>
        <p style={{ marginTop: "20px" }}>
          <button style={{ backgroundColor: "#FF9900", width: "200px" }}>
            Review Order
          </button>
        </p>
      </div>
    </div>
  );
};

export default AllProdcuts;
