import { motion } from 'framer-motion';

function Line({ height, xPos, color, width }) {
  return (
    <motion.div
      style={{ backgroundColor: 'orange' }}
      animate={{
        x: xPos * width,
        height: `${height * 10}px`,
        backgroundColor: color,
        width: `${width}px`,
      }}
      transition={{ duration: 0.4 }}
    />
  );
}

export default Line;
