import {useState} from 'react';
import iconTypescript from "./icons/typescript.svg";
import iconLeaflet from "./icons/leaflet.png";
import iconNodejs from "./icons/nodejs.svg";
import iconSequelize from "./icons/sequelize.svg";
import iconCpp from "./icons/cpp.svg"
import AnimCards from "./AnimCards";
import iconPlay from "./icons/play.svg"
import iconDocs from "./icons/docs.svg"
import SplitCard from "./SplitCard";
import Card from "./Card";

function ProjectsLeft() {
  const [showDemoCard, setShowDemoCard] = useState(false);

  return (
    <>
      <h1 className="w-full flex-none mb-2 text-2xl font-semibold">Projects</h1>
      <div className="grid grid-cols-2 gap-2">
        <Card img1={iconTypescript} img2={iconLeaflet} title="Leaflet Map" text="Angular | PostGIS"
              setShowDemoCard={setShowDemoCard}/>
        <Card img1={iconTypescript} img2={iconSequelize} title="Hashing file" text="Express | Sequelize"
              setShowDemoCard={setShowDemoCard}/>
        {/*<AnimCards/>*/}
        <Card img1={iconCpp} img2={iconCpp} title="Tetris" text="Raylib" setShowDemoCard={setShowDemoCard}/>
        {showDemoCard ? (
          <SplitCard img1={iconPlay} img2={iconDocs} leftText="Demo" rightText="Docs"
                     setShowDemoCard={setShowDemoCard}/>
        ) : (
          <Card img1={iconTypescript} img2={iconLeaflet} title="DSA" text="Data Structures and Algorithms"
                setShowDemoCard={setShowDemoCard}/>
        )}
      </div>
    </>
  )
}

export default ProjectsLeft
