import './App.css';
import {Navbar} from "./Components/Navbar";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects"
import ProjectsLeft from "./Components/ProjectsLeft";
import ProjectsRight from "./Components/ProjectsRight";

function App() {
  return (
    <>
      <Navbar/>
      <div className="flex">
        <div className="w-1/4">
          <ProjectsLeft/>
        </div>
        <div className="w-3/4">
          <ProjectsRight/>
        </div>
      </div>
      <div className="w-full">
        <Footer/>

      </div>
    </>
  );
}


export default App;
