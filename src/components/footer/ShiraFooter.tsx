import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const ShiraFooter = () => {
  return (
    <div className="container flex flex-col gap-8 justify-center items-center">
      <img src="assets/logo/lipsum.svg" alt="logo-lipsum" width={"215px"} />
      <div className="flex gap-8">
        <FaInstagram size={32} />
        <FaLinkedin size={32} />
        <FaTwitter size={32} />
        <FaFacebook size={32} />
      </div>
      <p>sdf</p>
      <p>© Tokisaki Gallery . ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default ShiraFooter;
