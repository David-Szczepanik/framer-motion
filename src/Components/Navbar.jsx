import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth < 768);
  const [isVertical] = useState(false);

  const checkSize = () => {
    setIsOpen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div className="bg-transparent relative">
      {isOpen ? <SlideTabs isVertical={isVertical}/> : <SlideTabs isVertical={!isVertical}/>}
    </div>
  );
};

const SlideTabs = ({isVertical}) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={`relative mx-auto ${isVertical ? 'flex absolute left-0' : 'flex-col '} w-fit bg-transparent p-1`}
    >
      <Tab setPosition={setPosition} to="/">Home</Tab>
      <Tab setPosition={setPosition} to="/projects">Projects</Tab>
      <Tab setPosition={setPosition} to="/contact">Contact</Tab>

      <Cursor position={position}/>
    </ul>
  );
};

const Tab = ({children, setPosition, to, isVertical}) => {
  const ref = useRef(null);

  return (
    <Link to={to}>
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;
          const {width, height} = ref.current.getBoundingClientRect();

          setPosition({
            left: ref.current.offsetLeft,
            top: ref.current.offsetTop,
            width: width,
            height: height,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-3 py-1.5  uppercase text-white  md:px-5 md:py-2 md:text-base"
        style={{fontFamily: 'Cascadia Mono, Arial'}}
      >
        {children}
      </li>
    </Link>
  );
};

const Cursor = ({position, isVertical}) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className={`absolute z-0 ${isVertical ? 'w-7' : 'h-7'} border rounded-md md:${isVertical ? 'w-12' : 'h-12'}`}
    />
  );
};
