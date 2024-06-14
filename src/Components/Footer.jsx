import React from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <div className="text-center bottom-0 inset-x-0">
        <h3 className="text-lg font-semibold" style={{fontFamily: 'Cascadia Mono, Arial'}}>Szczepanik © {year}</h3>
      </div>
    </>
  );
}

export default Footer;
