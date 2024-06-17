import ProjectsLeft from "./ProjectsLeft";
import {Routes, Route} from "react-router-dom";
import Leaflet from "./Projects/Leaflet";
import LeafletDocs from "./Projects/LeafletDocs";
import Hash from "./Projects/Hash";
import HashDocs from "./Projects/HashDocs";
import Tetris from './Projects/Tetris';
import TetrisDocs from "./Projects/TetrisDocs";
import DSA from './Projects/DSA';

function Projects() {
  return (
    <>
      <div className="lines">
        <div className="line"></div>
      </div>
      <div className="flex flex-col sm:flex-row ml-4 transition-all duration-200">
        <div className="w-full sm:w-1/4 mr-4 transition-all duration-200"

             style={{fontFamily: 'Bookerly Italic', fontSize: '18px'}}
        >
          <ProjectsLeft/>
        </div>

        <div className="w-full sm:w-3/4 mr-3 transition-all duration-200">
          <Routes>
            <Route path="/" element={<Leaflet/>}/>
            <Route path="leafletDemo" element={<Leaflet/>}/>
            <Route path="leafletDocs" element={<LeafletDocs/>}/>
            <Route path="hashDemo" element={<Hash/>}/>
            <Route path="hashDocs" element={<HashDocs/>}/>
            <Route path="tetrisDemo" element={<Tetris/>}/>
            <Route path="tetrisDocs" element={<TetrisDocs/>}/>
            <Route path="dsa" element={<DSA/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Projects;
