import React, {useState} from "react";
import Sorting from "./Sorting/Sorting";
import AnimatedLetters from "./AnimatedLetters";

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');

  const greetingArray = 'Hi,'.split('');
  const nameArray = 'I\'m David'.split('');
  const jobArray = 'Junior Programmer'.split('');

  return (
    <div className="flex-grow">
      <div className="container home-page ">
        <div className="text-zone sticky top-0">
          {/* Profile Picture */}
          <img
            src="/profile.jpg"
            alt="Profile"
            className="profile-picture mb-4 rounded-md w-40  object-cover"
          />
          <br/>
          <br/>
          <h1 className="">
            {/*<span className={letterClass}>Hi</span>*/}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetingArray}
              idx={1}
            />
            <br/>
            {/*<span className={`${letterClass} _10`}>I</span>*/}
            {/*<span className={`${letterClass} _20`}>'m</span>*/}
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
    </div>
  );
}

export default Home;
