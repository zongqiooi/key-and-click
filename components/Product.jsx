import React from "react";
import Link from "next/link";
import Image from "next/image";

const Product = ({ product: { image, name, price, slug, details } }) => {
  return (
    <div>
      <Link href={`/product/${slug}`}>
        <div className="product-card">
          <div>
            <Image
              src={image[0]}
              width={300}
              height={250}
              quality={100}
              alt="product"
              className="product-image"
            />
          </div>
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
