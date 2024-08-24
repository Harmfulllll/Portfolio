import React from "react";
import './Card.css'
import { motion } from "framer-motion";

export default function Card({
    image, title,tags, description, link
}) {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.25 }}
    className="card">
    <img
      className="card-image"
      src={image}
      alt="Project Preview"
    />
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <div className="card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="card-tag">
            {tag}
          </span>
        ))}
      </div>
      <p className="card-description">
        {description}
      </p>
    </div>
    <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
      <i className="external-link-icon"></i>
    </a>
  </motion.div>
  );
}
