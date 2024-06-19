import {useState} from 'react';
import iconTypescript from "./icons/typescript.svg";
import iconLeaflet from "./icons/leaflet.png";
import iconSequelize from "./icons/sequelize.svg";
import iconCpp from "./icons/cpp.svg"
import iconPlay from "./icons/play.svg"
import iconDocs from "./icons/docs.svg"
import SplitCard from "./SplitCard";
import Card from "./Card";
import iconDataStructure from "./icons/data.png"
import iconTetris from "./icons/tetris.svg"

function ProjectsLeft() {
  const [showDemoCard, setShowDemoCard] = useState(null);

  const projects = [
    {
      id: 1,
      img1: iconTypescript,
      img2: iconLeaflet,
      title: "Leaflet Map",
      text: "Angular | PostGIS",
      leftText: "Docs",
      linkLeft: "leafletDemo",
      linkRight: "leafletDocs"
    },
    {
      id: 2,
      img1: iconTypescript,
      img2: iconSequelize,
      title: "Hashing file",
      text: "Express | Sequelize",
      leftText: "Demo2",
      linkLeft: "hashDemo",
      linkRight: "hashDocs"
    },
    // {
    //   id: 3,
    //   img1: iconCpp,
    //   img2: iconTetris,
    //   title: "Tetris",
    //   text: "Raylib | WASM",
    //   leftText: "Demo3",
    //   linkLeft: "tetrisDemo",
    //   linkRight: "tetrisDocs"
    // },
    // {img1: iconCpp, img2: iconDataStructure, title: "DSA", text: "Data Structures and Algorithms", leftText: "Demo4"}
  ];

  return (
    <>
      <h1 className="w-full flex-none mb-2 text-2xl font-semibold">Projects</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2">
        {projects.map((project, index) => showDemoCard === index ?
          (
            <SplitCard key={project.id} img1={iconPlay} img2={iconDocs} leftText="Demo" rightText="Docs"
                       setShowDemoCard={setShowDemoCard} index={index} linkLeft={project.linkLeft}
                       linkRight={project.linkRight}/>
          )
          : (<Card key={project.id} img1={project.img1} img2={project.img2} title={project.title} text={project.text}
                   setShowDemoCard={setShowDemoCard} index={index}/>)
        )}
        <Card id={3} img1={iconCpp} img2={iconTetris} setShowDemoCard={setShowDemoCard} title={"Tetris"} text={"Raylib | WASM"} link="projects/tetris"/>
        <Card id={4} img1={iconCpp} img2={iconDataStructure} setShowDemoCard={setShowDemoCard} title={"DSA"}
              text={"Data Structures and Algorithms"} link="projects/dsa"></Card>
        <Card id={5} img1={iconCpp} img2={iconDataStructure} setShowDemoCard={setShowDemoCard} title={"Sorting"}
              text={"Sorting Algorithms Visualiser"} link="sorting"></Card>
      </div>
    </>
  )
}

export default ProjectsLeft
