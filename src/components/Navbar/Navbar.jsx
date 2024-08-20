import React, {useState} from "react";
import "./Navbar.css";
import {motion,AnimatePresence} from 'framer-motion'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
  const navItems = ["home", "about", "services", "contact"];
  
  const menuVariants = {
    hidden: { y: '-100%' },
    visible: { 
      y: '0%', 
      transition: { 
        duration: 1,  // Increase the duration
        ease: [0.6, 0.05, -0.01, 0.9] // Smooth easing function
      } 
    },
    exit: { 
      y: '-100%', 
      transition: { 
        duration: 1,  // Increase the duration
        ease: [0.6, 0.05, -0.01, 0.9] // Smooth easing function
      } 
    }
  }
   
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.3,  // Increase the delay for each item
        duration: 0.6,  // Slightly slower transition for the links
        ease: 'easeOut'  // Smoother easing for the links
      }
    }),
    exit: (i) => ({
      opacity: 0,
      y: -20,
      transition: { 
        delay: (3 - i) * 0.2, 
        duration: 0.4, 
        ease: 'easeIn' 
      }
    })
  };

  return (
    <>
    <nav>
       <div className="left">
         <motion.h1
            initial={{y:-100}}
            animate={{y:0}}
            transition={{delay:0.3, type:'spring', stiffness:240}}
         >Joy.dev</motion.h1>
       </div>
       <div className="menu-container">
      <motion.div
        className="menu-button"
        onClick={toggleMenu}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        style={{ zIndex: 1001 }}  
      >
        <motion.svg
          width="50"
          height="50"
          viewBox= "0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            x1="5"
            y1="10"
            x2="35"
            y2="10"
            stroke="#181532"
            strokeWidth="2"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 5 },
            }}
          />
          <motion.line
            x1="5"
            y1="20"
            x2="35"
            y2="20"
            stroke="#181532"
            strokeWidth="2"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.line
            x1="5"
            y1="30"
            x2="35"
            y2="30"
            stroke="#181532"
            strokeWidth="2"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -5 },
            }}
          />
        </motion.svg>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="menu"
          >
            <motion.div className="menu-content"  animate={isOpen ? "open" : "closed"}
            >
                {navItems.map((item, index) => (

                    <motion.a
                    key={index}
                    href={`#${item}`}
                    className="menu-item"
                    variants={linkVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{
                        scale: 1.2,  
                        color:  '#C8A1E0',
                        transition: { duration: 0.3 }  
                      }}
                      onClick={toggleMenu}
                    >
                    {item}

                    </motion.a>
                    

                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </nav>

    </>
  );
}
export default Navbar;