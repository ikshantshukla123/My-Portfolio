import React from 'react'
import './skills.css'
import './new.css'
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className='skills'
    >
      {/* ========== Languages ========== */}
      <h2 className='heading1'>Languages</h2>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="HTML" />
          <SemiDonutChart percentage={45} fill="#03B0FD" txt="CSS" />
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="JavaScript" />
        </div>
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="React JS" />
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="C" />
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="C++" />
        </div>
        <div className="flex">
          <SemiDonutChart percentage={65} fill="#03B0FD" txt="Solidity" />
          <SemiDonutChart percentage={45} fill="#03B0FD" txt="Python" />
        </div>
      </div>

      {/* ========== MERN Stack ========== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'>MERN Stack</h3>
        <div className="contents">
          <div className="flex">
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="MongoDB" />
            <SemiDonutChart percentage={75} fill="#03B0FD" txt="Express JS" />
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="React JS" />
            <SemiDonutChart percentage={65} fill="#03B0FD" txt="Node JS" />
          </div>
        </div>
      </motion.div>

      {/* ========== Blockchain ========== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'>Blockchain & Web3</h3>
        <div className="contents">
          <div className="flex">
            <SemiDonutChart percentage={60} fill="#03B0FD" txt="Blockchain Basics" />
            <SemiDonutChart percentage={55} fill="#03B0FD" txt="Foundry" />
            <SemiDonutChart percentage={50} fill="#03B0FD" txt="NFTs" />
          </div>
          <div className="flex">
            <SemiDonutChart percentage={50} fill="#03B0FD" txt="IPFS" />
            <SemiDonutChart percentage={65} fill="#03B0FD" txt="Solidity" />
          </div>
        </div>
      </motion.div>

      {/* ========== Databases & Tools ========== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'>Databases & Tools</h3>
        <div className="contents">
          <div className="flex">
            <SemiDonutChart percentage={55} fill="#03B0FD" txt="Supabase" />
            <SemiDonutChart percentage={75} fill="#03B0FD" txt="MongoDB" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
