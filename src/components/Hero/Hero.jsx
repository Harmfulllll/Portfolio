import React, { useEffect, useRef } from "react";
import {motion} from "framer-motion";
import './Hero.css';

function Hero() {
    const interBubbleRef = useRef(null);

    useEffect(() => {
        const interBubble = interBubbleRef.current;
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            if (interBubble) {
                interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }
            requestAnimationFrame(move);
        }

        function handleMouseMove(event) {
            tgX = event.clientX;
            tgY = event.clientY;
        }

        window.addEventListener('mousemove', handleMouseMove);
        move();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const textVariant={
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5,
                duration: 0.5
            }
        }
    }
    const rightVariant={
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.9,
                duration: 0.5
            }
        }
    }

    return (
        <div className="hero">
            <div className="gradient-bg">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradients-container">
                     <div className="g1"></div>
                     <div className="g2"></div>
                     <div className="g3"></div>
                     <div className="g4"></div>
                    <div className="interactive" ref={interBubbleRef}></div>
                </div>
            </div>
            <motion.div className="center" 
            variants={textVariant}
            initial="hidden"
            animate="visible"
            >
            <motion.div variants={textVariant} className="left">
                <h1>
                    Tanvir Hassan
                </h1>
                <motion.h2  variants={textVariant}>
                    JOY
                </motion.h2>
            </motion.div>
            <motion.div variants={rightVariant  }         initial="hidden"
            animate="visible" className="right">
                <h1 className="right-h1">
                    Software Engineer
                </h1>
                <p>
                    with an endless curiosity for learning and<br/>
                     on my way to build something that I can be proud of.
                </p>
                <a href="#about">Learn more about me</a>
            </motion.div>
            </motion.div>
        </div>
    );
}

export default Hero;