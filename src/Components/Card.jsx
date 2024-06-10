import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import iconBack from "./icons/back.svg";

function Card({ img1 = 'img1', img2 = 'img2', title = 'title', text = 'text', setShowDemoCard }) {
  const [isClicked, setIsClicked] = useState(false);
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (!divRef.current) return;

    const { width, height, top, left } = divRef.current.getBoundingClientRect();
    setDimensions({ width, height, top, left });
  }, []);

  const handleClickBack = (event) => {
    event.stopPropagation();
    setIsClicked(false);
    setShowDemoCard(false);
  };

  const handleClick = () => {
    setIsClicked(true);
    setShowDemoCard(true);
  };

  return (
    <motion.button
      onClick={handleClick}
      style={{ width: '230px', height: '170px' }}
      className="flex-1 bg-white border border-gray-400 transition-0.3 rounded-lg flex flex-col justify-center items-center neon-border"
      whileHover={{ scale: 1.1, backgroundColor: 'rgb(243 244 246)' }}
      whileTap={{ scale: 0.9 }}
    >
      <div ref={divRef} className="container relative">
        {/* Back Button */}
        {isClicked && (
          <button onClick={handleClickBack} className="absolute top-0 left-0 p-2 cursor-alias">
            <img src={iconBack} alt="Back" className="w-5 h-5" />
          </button>
        )}
        <div className="flex justify-center">
          <img className="w-14 h-14 mb-2" src={img1} alt="tech" />
          <img className="w-14 h-14 mb-2" src={img2} alt="tech" />
        </div>
        <h2 className="font-sans m-0 text-gray-800">{title}</h2>
        <p className="font-sans text-gray-500">{text}</p>
      </div>
    </motion.button>
  );
}

Card.propTypes = {
  img1: PropTypes.string,
  img2: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  setShowDemoCard: PropTypes.func,
};

export default Card;
