import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import {useState, useRef, useEffect} from 'react';
import {Link} from "react-router-dom";

function Card({img1 = 'img1', img2 = 'img2', title = 'title', text = 'text', setShowDemoCard, index, link}) {
  const divRef = useRef(null);
  const [setDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (!divRef.current) return;

    const {width, height, top, left} = divRef.current.getBoundingClientRect();
    setDimensions({width, height, top, left});
  }, [setDimensions]);


  const handleClick = (index) => {
    setShowDemoCard(index);
  };


  const cardContent = (
    <div>
      <div className="flex justify-center">
        <img className="w-14 h-14 mb-2" src={img1} alt="img1"/>
        <img className="w-14 h-14 mb-2" src={img2} alt="img2"/>
      </div>
      <h2 className="font-sans m-0 text-gray-800">{title}</h2>
      <p className="font-sans text-gray-500">{text}</p>
    </div>
  );

  return (
    <motion.button
      onClick={() => handleClick(index)}
      style={{width: '230px', height: '170px'}}
      className="flex-1 bg-white bg-opacity-60 border border-gray-400 transition-0.3 rounded-lg flex flex-col justify-center items-center shadow-lg"
      whileHover={{scale: 1.1, backgroundColor: 'rgb(243 244 246)'}}
      whileTap={{scale: 0.9}}
    >
      {link ? <Link to={`/${link}`}>{cardContent}</Link> : cardContent}
    </motion.button>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  img1: PropTypes.string,
  img2: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  setShowDemoCard: PropTypes.func,
};

export default Card;
