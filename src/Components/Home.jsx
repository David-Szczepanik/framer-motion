import React, { useState } from "react";
import Sorting from "./Sorting/Sorting";
import AnimatedLetters from "./AnimatedLetters";

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ' David'.split('');
  const jobArray = 'Junior Programmer'.split('');

  return (
    <div className="flex-grow">
      <div className="container home-page">
        <div className="text-zone">
          {/* Profile Picture */}
          <img
            src="/src/Components/profile.jpg"
            alt="Profile"
            className="profile-picture mb-4 rounded-full w-32 h-32 object-cover"
          />

          <h1>
            <span className={letterClass}>Hi</span>
            <br/>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
