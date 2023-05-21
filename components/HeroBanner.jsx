import Link from "next/link";
import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div className="hero-title">
        <p className="beats-solo">G413 Mechanical Keyboard</p>
        <h3>Summer Sale!</h3>
        <h1>2023</h1>
        <Image
          src="https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/g413-firebird/g413-gallery-1-nb.png?v=1"
          width={450}
          height={450}
          alt="keyboard"
          className="hero-banner-image"
        />
      </div>
      <div className="hero-button">
        <Link href={`/product/G413-Keyboard`}>
          <button type="button">Shop Now</button>
        </Link>
        <div className="desc">
          <h5>Key & Click.</h5>
          <p>Best keyboard on the market</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
