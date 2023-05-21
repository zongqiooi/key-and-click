import React from "react";
import { useState } from "react";
import { Footer, Layout, Navbar } from "@/components";
import { products } from "../data";
import { useRouter } from "next/router";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "@/components";
import toast, { Toaster } from "react-hot-toast";
import { useStateContext } from "@/context/StateContext";

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const stars = [];
  const nonStars = [];

  const currProduct = products.find((product) => product.slug === slug);

  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(currProduct, qty);
    setShowCart(true);
  };

  for (let i = 0; i < currProduct.reviews; i++) {
    stars.push(<AiFillStar key={i} />);
  }

  for (let i = 0; i < 5 - currProduct.reviews; i++) {
    nonStars.push(<AiOutlineStar key={i} />);
  }

  return (
    <div>
      <Layout>
        <div className="product-detail-container">
          <div className="product-image-container">
            <div className="image-container">
              <img
                src={currProduct.image && currProduct.image[index]}
                className="product-detail-image"
              />
            </div>
            <div className="small-images-container">
              {currProduct.image?.map((item, i) => (
                <img
                  key={i}
                  src={item}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
          <div className="product-detail-desc">
            <h1>{currProduct.name}</h1>
            <div className="reviews">
              <div>
                {stars}
                {nonStars}
              </div>
              <p>({currProduct.people_reviewed})</p>
            </div>
            <h4>Details:</h4>
            <p>{currProduct.details}</p>
            <p className="price">${currProduct.price}</p>
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" type="minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="plus" type="add" onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(currProduct, qty)}
              >
                Add to Cart
              </button>
              <button type="button" className="buy-now" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductDetails;