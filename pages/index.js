import React, { useEffect, useState } from "react";
import { Product, HeroBanner, FooterBanner, Layout } from "@/components";
// import dbConnect from "@/lib/dbConnect";
// import clientPromise from "@/lib/mongodb";

// import connectMongo from "@/util/connectMongo";
// import Item from "@/models/Item";

// import axios from "axios";
// import mongoose from "mongoose";
// import { products } from "./data";
// import clientPromise from "@/lib/mongo";
// import clientPromise from ".";

import { getProducts } from "@/lib/mongo/items";

// async function fetchProducts() {
//   const { products } = await getProducts();
//   if (!products) throw new Error("Failed to fetch products!");

//   console.log("wthhhackeck why is there another bug");
//   console.log(products);

//   return products;
// }

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
  // let products;

  const { products } = await getProducts();
  if (!products) throw new Error("Failed to fetch products!");

  return {
    // props: { products },
    props: { products: JSON.parse(JSON.stringify(products)) },
  };

  // try {
  //   console.log("Connecting to mongo...");
  //   await connectMongo();
  //   console.log("Connected to mongo!");

  //   console.log("Fetching documents!");
  //   const products = await Item.find({});
  //   // const item = await Item.find({}); // try this too later
  //   console.log("Fetched documents!");

  //   return {
  //     props: { products },
  //     // props: { products: JSON.parse(JSON.stringify(products)) },
  //   };
  // } catch (error) {
  //   console.log(error);
  //   return { notFound: true };
  // }
};

export default Home;
