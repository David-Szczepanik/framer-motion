import ReactGA from 'react-ga4';
import ProjectsLeft from "./ProjectsLeft";
import {Routes, Route} from "react-router-dom";
import Leaflet from "./Projects/Leaflet";
import LeafletDocs from "./Projects/LeafletDocs";
import Hash from "./Projects/Hash";
import HashDocs from "./Projects/HashDocs";
import Tetris from './Projects/Tetris';
import DSA from './Projects/DSA';
import TetrisDocs from "./Projects/TetrisDocs";
import Hotel from "./Projects/Hotel";

function Projects() {


  const handleProjectClick = (projectName) => {
    console.log('Project clicked: ', projectName);
    ReactGA.event({
      action: 'Project navigation',
      category: 'User',
      label: projectName
    });
  };
  return (
    <>
      <div className="lines">
        <div className="line"></div>
      </div>

      <div className="flex flex-col sm:flex-row ml-4 transition-all duration-200">
        <div className="w-full sm:w-1/4 mr-4 transition-all duration-200"
             style={{fontFamily: 'Bookerly Italic', fontSize: '18px'}}
        >
          <ProjectsLeft onProjectClick={handleProjectClick}/>
        </div>

        <div className="w-full sm:w-3/4 mr-3 transition-all duration-200">
          <Routes>
            <Route path="/" element={<Leaflet/>}/>
            <Route path="leafletDemo" element={<Leaflet/>}/>
            <Route path="leafletDocs" element={<LeafletDocs/>}/>
            <Route path="hashDemo" element={<Hash/>}/>
            <Route path="hashDocs" element={<HashDocs/>}/>
            <Route path="tetris" element={<Tetris/>}/>
            <Route path="tetrisDocs" element={<TetrisDocs/>}/>
            <Route path="dsa" element={<DSA/>}/>
            <Route path="hotel" element={<Hotel/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Projects;
