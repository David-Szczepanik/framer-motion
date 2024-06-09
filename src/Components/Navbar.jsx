import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth < 768);
  const [isVertical, setIsVertical] = useState(false);

  const checkSize = () => {
    setIsOpen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div className="bg-auto relative">
      {/*Change Hamburger after testing to SlideTabs*/}
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
      // className={`relative mx-auto ${isVertical ? 'flex' : 'flex-col'} w-fit border-black bg-white p-1`}
      className={`relative mx-auto ${isVertical ? 'flex absolute left-0' : 'flex-col '} w-fit bg-white p-1`}
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Projects</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>

      <Cursor position={position}/>
    </ul>
  );
};


const Tab = ({children, setPosition, isVertical}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        // for ts
        if (!ref?.current) return;

        const data = ref.current.getBoundingClientRect();
        // console.log(data)
        // console.log(ref.current.offsetTop)

        const {width, height} = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          top: ref.current.offsetTop,
          width: width,
          height: height,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      // className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base ${isVertical ? 'w-full' : ''}`}
    >
      {/*Whats children*/}
      {children}
    </li>
  );
};

const Cursor = ({position, isVertical}) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className={`absolute z-0 ${isVertical ? 'w-7' : 'h-7'} rounded-full bg-black md:${isVertical ? 'w-12' : 'h-12'}`}
    />
  );
};
