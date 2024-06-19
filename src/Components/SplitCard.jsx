import {Link} from "react-router-dom"
import {motion} from 'framer-motion';
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

  const handleClickBack = () => {
    setShowDemoCard(false);
  }

  return (
    <>
      <motion.div
        className="flex border border-gray-400 rounded-lg shadow-md text-center relative h-full"
      >
        <div className="absolute top-0 left-0 w-6 h-6 bg-auto hover:bg-gray-300 rounded-lg" onClick={handleClickBack}>
          <img src={iconBack} alt="back"/>
        </div>

        {/*Left*/}
        <Link to={`/projects/${linkLeft}`} className="w-full h-full flex items-stretch">
          <motion.div
            className="square-half flex-1 bg-white text-black transition-0.3 rounded-l-lg flex flex-col justify-center items-center"
            whileHover={{backgroundColor: 'rgba(255,255,255,0.73)'}}
          >
            <img src={img1} alt="Back" className="w-14 h-14"/>
            <p>{leftText}</p>
          </motion.div>
        </Link>

        {/*Right*/}
        <Link to={`/projects/${linkRight}`} className="w-full h-full flex items-stretch">
          <motion.div
            className="square-half flex-1 bg-white text-black transition-0.3 rounded-r-lg flex flex-col justify-center items-center"
            whileHover={{backgroundColor: 'rgba(255,255,255,0.73)'}}
          >
            <img src={img2} alt="Demo" className="w-14 h-14"/>
            <p>{rightText}</p>
          </motion.div>
        </Link>
      </motion.div>
    </>
  )
}

export default SplitCard
