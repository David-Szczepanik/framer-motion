import {Link} from "react-router-dom"
import {motion} from 'framer-motion';
import {useState} from 'react';
import iconBack from "./icons/back.svg"

function SplitCard({
                     id = 0,
                     img1 = 'img1',
                     img2 = 'img2',
                     leftText = 'title',
                     rightText = 'text',
                     setShowDemoCard,
                     linkLeft = 'linkLeft',
                     linkRight
                   }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickBack = (event) => {
    event.stopPropagation();
    setIsClicked(false);
    setShowDemoCard(false);
  }

  return (
    <>
      <motion.div
        id={`split-card-${id}`}
        style={{width: '230px', height: '170px'}}
        className="flex border border-gray-400 rounded-lg shadow-md text-center relative"
      >
        <div className="absolute top-0 left-0 w-6 h-6 bg-auto hover:bg-gray-300 rounded-lg" onClick={handleClickBack}>
          <img src={iconBack} alt="back"/>
        </div>

        {/*Left*/}
        <motion.div
          className="square-half flex-1 bg-white transition-0.3 rounded-lg flex flex-col justify-center items-center"
          whileHover={{backgroundColor: 'rgb(243 244 246)'}}
        >
          <Link to={`/projects/${linkLeft}`}>
            <img src={img1} alt="Back" className="w-14 h-14"/>
            <p>{leftText}</p>
          </Link>
        </motion.div>

        {/*Right*/}
        <motion.div
          className="square-half flex-1 bg-white transition-0.3 rounded-lg flex flex-col justify-center items-center"
          whileHover={{backgroundColor: 'rgb(243 244 246)'}}
        >
          <Link to={`/projects/${linkRight}`}>
            <img src={img2} alt="Demo" className="w-14 h-14"/>
            <p>{rightText}</p>
          </Link>
        </motion.div>
      </motion.div>
    </>
  )
}

export default SplitCard
