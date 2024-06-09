import PropTypes from 'prop-types'

function Card({imgs = [], title = 'title', text = 'text'}) {
  return (
    <div className="border border-gray-400 rounded-lg shadow-md p-5 m-2 text-center max-w-xs inline-block">
      <div className="flex justify-center">
        {imgs.map((img, index) => (
          <img key={index} className="w-14 h-14 mb-2" src={img} alt="tech"/>
        ))}
      </div>
      <h2 className="font-sans m-0 text-gray-800">{title}</h2>
      <p className="font-sans text-gray-500">{text}</p>
    </div>
  )
}

Card.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  text: PropTypes.string
}

export default Card
