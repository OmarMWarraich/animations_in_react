import React from 'react';
import { motion } from "framer-motion";

const Example1 = () => (
    <motion.div
        drag
        dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
        }}
    >Drag</motion.div>
)

export default Example1;
