import './App.css';
import {Navbar} from "./Components/Navbar";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects"
import ProjectsLeft from "./Components/ProjectsLeft";
import ProjectsRight from "./Components/ProjectsRight";
import Card from "./Components/Cards";
import iconTypescript from "./Components/icons/typescript.svg"
import iconLeaflet from "./Components/icons/leaflet.png"
import iconNodejs from "./Components/icons/nodejs.svg"
import iconSequelize from "./Components/icons/sequelize.svg"

function App() {
  return (
    <>
      <Navbar/>
      <div className="flex">
        <div className="w-1/2">
          <ProjectsLeft/>
          <Card imgs={[iconTypescript, iconLeaflet, iconNodejs]} title="Leaflet Map" text="TypeScript | Node.js"/>
          <Card imgs={[iconTypescript,iconSequelize,iconNodejs]} title="Hashing file" text="TypeScript | Node.js"/>
        </div>
        <div className="w-1/2">
          <ProjectsRight/>
        </div>
      </div>
      <Footer/>
    </>
  );
}


export default App;
