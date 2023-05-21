import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>20% OFF</p>
          <h3>KEY &</h3>
          <h3>CLICK.</h3>
          <p>15 Nov to 7 Dec</p>
        </div>
        <div className="right">
          <p>G502 Mouse</p>
          <h3>Summer Sale!</h3>
          <p>Best mouse on the market</p>
          <Link href={`/product/G502-Mouse`}>
            <button type="button">Shop Now</button>
          </Link>
        </div>
        <Image
          src="https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/hyjal-g502-hero/g502-hero-gallery-1-nb.png?v=1"
          alt="mouse"
          className="footer-banner-image"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
