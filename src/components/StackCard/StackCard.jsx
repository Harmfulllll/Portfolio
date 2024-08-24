import React from "react";

function StackCard({ name, description, icon, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card">
          <div className="card-content">
            <div className="icon">
              <img src={icon} alt={name} />
            </div>
            <div className="text">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="arrow">
          <img decoding="async" src="https://framerusercontent.com/images/sTyztaIbHtXHjwRG94Bh0T8zBB4.svg" alt=""></img>
          </div>
        </a>
    );
}

export default StackCard;