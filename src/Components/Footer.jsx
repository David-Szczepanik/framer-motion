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
    <div className="container mx-auto px-6 absolute inset-x-0 bottom-0">
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          {/*<h3 className="text-lg font-semibold">Designed</h3>*/}
        </div>
        <div className="w-1/3 text-center">
          <h3 className="text-lg font-semibold">Szczepanik © {year}</h3>
        </div>
        <div className="w-1/3 flex justify-end">
          <ul className="flex items-center">
            <li className="ml-2">
              <a
                href="https://github.com/David-Szczepanik"
                className="text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub/>
              </a>
            </li>
            <li className="ml-2">
              <a
                href="https://www.linkedin.com/in/David-Szczepanik/"
                className="text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn/>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
