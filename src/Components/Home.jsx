import React, {useState} from "react";
import AnimatedLetters from "./AnimatedLetters";
import {motion, useAnimation} from "framer-motion";
import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
import {LuMail} from "react-icons/lu";


function Home() {
  const [letterClass] = useState('text-animate');

  const greetingArray = 'Hi,'.split('');
  const nameArray = 'I\'m David'.split('');
  const jobArray = 'Junior Programmer'.split('');

  const controls = useAnimation();

  function myFunction() {
    navigator.clipboard.writeText('DavidSzczepanik@mail.com');

    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied to clipboard";
  }

  function outFunc() {
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }


  return (
    <>
      <div
        className="flex flex-col md:flex-row md:justify-between items-center md:items-start md:px-5 lg:px-80 px-4 py-8">

        {/*PROFILE & TEXT*/}
        <div
          className="container home-page max-w-xl md:max-w-xl md:w-2/5 md:absolute md:left-44 md:top-1/2 md:-translate-y-3/4 font-bookerly">
          <div className="text-zone text-center md:text-left">

            {/* Profile Picture */}
            <img
              src="/profile.jpg"
              alt="Profile"
              className="profile-picture mb-4 rounded-full w-48 object-cover mx-auto md:mx-0"
            />

            <br/>
            <br/>
            <br/>
            <h1 className="xl:text-5xl md:text-3xl sm:text-4xl text-white w-auto">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={greetingArray}
                idx={1}
              />
              <br/>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={5}
              />
              <br/>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={10}
              />
            </h1>
          </div>
        </div>


        {/*CONTACT CARD*/}
        <div className="md:ml-auto lg:mr-40 mt-8 ">
          <motion.div
            style={{
              position: 'relative',
              width: 'fit-content',
              padding: '20px',
              backgroundColor: 'rgba(0,0,0,0.6)',
              border: '1px solid black',
              cursor: 'default',
              marginBottom: '55%',
            }}
            className="relative rounded-lg flex flex-col justify-center items-center mx-auto md:ml-0"
            onHoverStart={() => controls.start({
              borderColor: 'rgb(11,142,157)', boxShadow: '0px 0px 10px 2px rgb(6,65,152)'
            })}
            onHoverEnd={() => controls.start({borderColor: 'rgb(0,0,0)'})}
            animate={controls}
          >

            <div style={{fontFamily: 'Bookerly', fontSize: '18px', color: 'white'}}>

              <div className="tooltip flex items-center mb-2">
                <LuMail className="mr-2" size={48}/>
                <button onClick={myFunction} onMouseOut={outFunc}>
                  <span className="tooltiptext" id="myTooltip">Copy to clipboard</span>
                  <p id="myInput">DavidSzczepanik@mail.com</p>
                </button>
              </div>

              <div className="flex items-center mb-2">
                <FaLinkedin className="mr-2" size={48}/>
                <a href="https://www.linkedin.com/in/david-szczepanik" target="_blank" rel="noopener noreferrer">
                  linkedin/David-Szczepanik
                </a>
              </div>

              <div className="flex items-center mb-2">
                <FaGithubSquare className="mr-2" size={48}/>
                <a href="https://www.github.com/david-szczepanik" target="_blank" rel="noopener noreferrer">
                  github.com/David-Szczepanik
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

    </>
  );
}

export default Home;
