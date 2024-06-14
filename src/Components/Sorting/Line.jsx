import {motion} from 'framer-motion';

function Line({height, xPos, color}) {
  return (
    <motion.div
      style={{backgroundColor: 'orange'}}
      animate={{
        x: xPos * 10,
        height: `${height * 10}px`,
        backgroundColor: color,
        width: '20px',
      }}
      transition={{duration: 0.4}}
    />
  );
}

export default Line;
