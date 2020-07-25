import React from 'react';
import { motion } from "framer-motion";

const button = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    pressed: { scale: 0.95 }
};

const Example1 = () => (
    <motion.div 
        variants={button}
        initial="rest"
        whileHover="hover"
        whileTap="pressed" 
    >Click</motion.div>
);

export default Example1;
