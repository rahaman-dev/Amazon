import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./AppProducts.css";

const AllProdcuts = () => {
  const [products, setProducts] = useState([]);
  const [child, setChild] = useState([]);

  useEffect(() => {
    fetch("../../../public/fakeData/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCard = (product) => {
    const newChild = [...child, product];
    console.log(newChild);
    setChild(newChild);
  };

  return (
    <div className="flex">
      <div className="products">
        <div className="allproducts">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCard={addToCard}
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
          Selected Items:
          <span
          // style={{
          //   color: "White",
          //   backgroundColor: "red",
          //   padding: "2px",
          //   borderRadius: "15px",
          // }}
          >
            {child.length}
          </span>
        </p>
        <p>
          Total Price: $<span> </span>
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
