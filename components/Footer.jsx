import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© 2023 Key & Click. All Rights Reserved.</p>
      <p className="icons">
        <div className="linkedin">
          <Link href="https://www.linkedin.com/in/zongqiooi/">
            <AiFillLinkedin />
          </Link>
        </div>
        <div className="github">
          <Link href="https://github.com/zongqiooi/key-and-click">
            <AiFillGithub />
          </Link>
        </div>
      </p>
      <p>Made with ❤️ by Zong Qi.</p>
    </div>
  );
};

export default Footer;
