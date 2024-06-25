import ReactGA from 'react-ga4';
import {Navbar} from "./Components/Navbar";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Sorting from "./Components/Sorting/Sorting";
import React from 'react';


// import React from 'react';

function App() {
  ReactGA.initialize('G-4G36615P8Z');
  const location = useLocation();

  ReactGA.send({hitType: "pageview", page: location.pathname});

  React.useEffect(() => {
    ReactGA.send({hitType: 'pageview', page: window.location.pathname});
  }, [location]);


  return (<>
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
  </>);
}

export default App;
