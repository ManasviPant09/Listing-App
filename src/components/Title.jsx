import React from 'react';
import { motion } from 'framer-motion';
import Icon from "../assets/Icon.png"

const Title = () => {
  return (
    <>
    <div style={{ textAlign: 'center', fontStyle: "italic", display: "flex" , alignItems: "center",justifyContent: "center", padding: "20px" }}>
    <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1]
      }}><img src = {Icon} style={{width: "45px"}}/></motion.div>
    <motion.h1 initial={{color: "white",opacity: 0}} animate={{color: "black",opacity: 1}} transition={{ duration: 2.0 }} style={{ fontWeight: 'bold' }}>Welcome to Pizzeria!</motion.h1>
    </div>
    </>
  );
};

export default Title;
