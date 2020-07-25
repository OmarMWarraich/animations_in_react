import React from 'react';
import { motion } from "framer-motion";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}
  
const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}

const Playground = () => (
    <motion.ul initial="hidden" animate="visible" variants={list} >
        <motion.li variants={item}>test</motion.li>
        <motion.li variants={item}>test</motion.li>
        <motion.li variants={item}>test</motion.li>
    </motion.ul>
);

export default Playground;