import React from "react";

const ProductCount = () => {
    const productCount = 89;

    return (
        <div className="count-box">
      <h2>Total Products</h2>
      <p>{productCount }</p>
    </div>
    );
}

export default ProductCount;