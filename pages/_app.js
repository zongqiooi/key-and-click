import React, { useState, useEffect } from "react";
import "./globals.css";
import { StateContext } from "@/context/StateContext";
import { Layout } from "@/components";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <StateContext>
          <Toaster />
          <Component {...pageProps} />
        </StateContext>
      )}
    </>
  );
};

export default MyApp;
