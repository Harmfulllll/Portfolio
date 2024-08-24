import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import StackCard from "../../components/StackCard/StackCard";

function Skills() {
    const tools = [
        { name: 'ReactJs', description: 'JavaScript library', icon: './reactjs.png', link: 'https://react.dev/' },
        { name: 'NodeJs', description: 'JavaScript runtime', icon: './node.png', link: 'https://nodejs.org/en' },
        { name: 'ExpressJs', description: 'NodeJs framework', icon: './express.png', link: 'https://expressjs.com/' },
        { name: 'MongoDB', description: 'Document database', icon: './mongodb.png', link: 'https://www.mongodb.com/' },
        { name: 'Html', description: 'Markup language', icon: './html.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'Css', description: 'Style sheet', icon: './css.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'C++', description: 'Programming language', icon: './c++.png', link: 'https://isocpp.org/' },
        { name: 'Git', description: 'Version control tool', icon: './git.png', link: 'https://git-scm.com/' },

      ];
  return (
    <div className="skills">
      <div className="skill-header">
         <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
         >My stacks</motion.h1>
         <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
         >
            Some of the technologies I am familiar with
         </motion.p>
      </div>
      <div className="stack-list">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      className="card-grid">
        {tools.map((tool, index) => (
          <StackCard key={index} {...tool} />
        ))}
    </motion.div>
      </div>
    </div>
  );
}
export default Skills;