import React from "react";
import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about">
        <div className="about-header">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >Hey, My name is Tanvir Hassan Joy,<span> a dedicated learner<br/>
       and hopefully a future developer. I have recently completed my Bachelors in computer science.</span> 
      </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
      As a computer science student, I always had a keen interest in programming and problem-solving. I have acquired decent theoretical knowledge from my university coursework. Initially, I tried my luck with competitive programming, but nowadays I am more into development. As I have already said that I consider myself to be a curious learner, right now I am trying to learn how to be a somewhat good developer. 
      </motion.p>
     
     <div className="resume-div">
     <button className="resume-button">
     <svg stroke="currentColor" fill="#3CCF91" stroke-width="0" viewBox="0 0 384 512" aria-hidden="true" focusable="false" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
     <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path>
     </svg>
        <a target="_blank" rel="noreferrer"
         href="https://drive.google.com/file/d/1LfMRDVYk1q8xZEgUA4hk-toyGvPuUKqs/view"> My resume</a>
      </button>
      
      </div>
    </div>
  );
}
export default About;

