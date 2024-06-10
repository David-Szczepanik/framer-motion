import PropTypes from 'prop-types'
import { motion } from 'framer-motion';

function Card({imgs = [], title = 'title', text = 'text', onClick}) {
  return (
    <motion.button
      onClick={onClick}
      className="border border-gray-400 hover:bg-gray-100 rounded-lg shadow-md p-5 m-2 text-center w-200 inline-block"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="flex justify-center">
        {imgs.map((img, index) => (
          <img key={index} className="w-14 h-14 mb-2" src={img} alt="tech"/>
        ))}
      </div>
      <h2 className="font-sans m-0 text-gray-800">{title}</h2>
      <p className="font-sans text-gray-500">{text}</p>
    </motion.button>
  )
}

Card.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Card
