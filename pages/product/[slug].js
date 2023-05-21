import React from "react";
import { useState } from "react";
import { Layout } from "@/components";
import { useRouter } from "next/router";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "@/components";
import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
import { getProducts } from "@/lib/mongo/items";

const ProductDetails = ({ products }) => {
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
              <Image
                src={currProduct.image && currProduct.image[index]}
                width={100}
                height={100}
                className="product-detail-image"
                alt="product image"
              />
            </div>
            <div className="small-images-container">
              {currProduct.image?.map((item, i) => (
                <Image
                  key={i}
                  width={100}
                  height={100}
                  src={item}
                  alt="product image in different views"
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

export const getServerSideProps = async () => {
  const { products } = await getProducts();
  if (!products) throw new Error("Failed to fetch products!");

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
};

export default ProductDetails;
