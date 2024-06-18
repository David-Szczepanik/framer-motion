import React, {useState} from "react";
import {FaLinkedin, FaGithubSquare} from "react-icons/fa";

function Footer() {
  const [linkedinColor, setLinkedinColor] = useState('white');
  const [githubColor, setGithubColor] = useState('white');
  const year = new Date().getFullYear();

  return (
    <>
      <div className="text-center bottom-0 inset-x-0">
        <h2 className="text-mg font-semibold" style={{fontFamily: 'Cascadia Mono, Arial'}}>Szczepanik © {year}</h2>

        <div className="fixed bottom-0 right-2 flex space-x-2">
          <a href="https://www.linkedin.com/in/David-Szczepanik/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} style={{color: linkedinColor}} onMouseEnter={() => setLinkedinColor('rgb(0,0,0)')}
                        onMouseLeave={() => setLinkedinColor('white')}/>
          </a>

          <a href="https://www.github.com/David-Szczepanik/" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare size={28} style={{color: githubColor}} onMouseEnter={() => setGithubColor('rgb(0,0,0)')}
                            onMouseLeave={() => setGithubColor('white')}/>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
