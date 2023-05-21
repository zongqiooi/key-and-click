import React from "react";
import Link from "next/link";

const Product = ({ product: { image, name, price, slug, details } }) => {
  return (
    <div>
      <Link href={`/product/${slug}`}>
        <div className="product-card">
          <img
            src={image}
            alt="product"
            width={300}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
