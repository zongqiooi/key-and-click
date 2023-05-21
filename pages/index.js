import React from "react";
import { Product, HeroBanner, FooterBanner, Layout } from "@/components";
import { getProducts } from "@/lib/mongo/items";

const Home = ({ products }) => {
  return (
    <>
      <Layout>
        <HeroBanner />
        <div className="products-heading">
          <h2>Best Selling Products</h2>
          <p>Keyboards and mice of many variations</p>
        </div>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <FooterBanner />
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const { products } = await getProducts();
  if (!products) throw new Error("Failed to fetch products!");

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
};

export default Home;
