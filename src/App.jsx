import {Navbar} from "./Components/Navbar";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Sorting from "./Components/Sorting/Sorting";

function App() {
  return (
    <>
      <div className="background flex flex-col min-h-screen justify-between">

        <Navbar/>


        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects/*" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/sorting" element={<Sorting/>}/>
        </Routes>

        <Footer/>
      </div>
    </>
  );
}

export default App;
