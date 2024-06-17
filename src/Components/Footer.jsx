import React from "react";
import {FaLinkedin, FaGithubSquare} from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <div className="text-center bottom-0 inset-x-0">
        <h2 className="text-mg font-semibold" style={{fontFamily: 'Cascadia Mono, Arial'}}>Szczepanik © {year}</h2>

        <div className="fixed bottom-0 right-2 flex space-x-2">
          <FaLinkedin size={28}/>
          <FaGithubSquare size={28}/>
        </div>
      </div>
    </>
  );
}

export default Footer;
