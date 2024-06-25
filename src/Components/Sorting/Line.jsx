import { motion } from 'framer-motion';

function Line({ height, xPos, color, width }) {
  return (
    <motion.div
      style={{
        backgroundColor: 'orange',
        boxSizing: 'border-box' // Add this line
      }}
      animate={{
        x: xPos,
        height: `${height * 10}px`,
        backgroundColor: color,
        width: `${width}px`,
      }}
      transition={{ duration: 0.4 }}
    />
  );
}

export default Line;
