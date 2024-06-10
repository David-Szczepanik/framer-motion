import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="fixed inset-x-0 bottom-0">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Szczepanik © {year}</h3>
      </div>
    </div>
  );
}

export default Footer;
