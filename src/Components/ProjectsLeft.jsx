import Card from "./Cards";
import iconTypescript from "./icons/typescript.svg";
import iconLeaflet from "./icons/leaflet.png";
import iconNodejs from "./icons/nodejs.svg";
import iconSequelize from "./icons/sequelize.svg";
import iconCpp from "./icons/cpp.svg"
import AnimCards from "./AnimCards";

function ProjectsLeft() {
  return (
    <>
      <h1 className="w-full flex-none mb-2 text-2xl font-semibold">Projects</h1>
      <div className="grid grid-cols-2 gap-2">
        <Card imgs={[iconTypescript, iconLeaflet]} title="Leaflet Map" text="Angular | PostGIS"/>
        <Card imgs={[iconTypescript, iconSequelize]} title="Hashing file" text="Express | Sequelize"/>
       <AnimCards/>
        {/*<Card imgs={[iconCpp]} title="Tetris" text="Raylib"/>*/}
        <Card imgs={[iconCpp]} title="DSA" text="Data Structures and Algorithms"/>
      </div>
    </>
  )
}

export default ProjectsLeft
