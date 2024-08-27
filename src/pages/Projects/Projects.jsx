import React from "react";
import { motion} from "framer-motion";
import './Projects.css'
import Card from "../../components/Card/Card";

function Projects() {

    return (
        <motion.div className="projects">
            <motion.div className="project-heading">
                <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                >Projects</motion.h1>
                <motion.p
                       initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                >
                   Some of the hobby projects that I have worked on.
                </motion.p>
            </motion.div>
            <div className="card-container">
                <div className="card-data">
                    <Card
                        image="./downwatch.png"
                        title="Downwatch"
                        tags={["React", "Node", "Express", "MongoDB"]}
                        description="The application allows users to register and track the status of their websites in real-time. If a website goes down, the system automatically sends email notifications to alert users. "
                        link="https://github.com/Harmfulllll/Down-watch"
                    />
                </div>
                <div className="card-data">
                    <Card
                        image="./vignere.png"
                        title="Vignere cipher"
                        tags={["React"]}
                        description="
                        This is a simple web application that allows users to encrypt and decrypt messages using the Vignere cipher.
                        "
                        link="https://github.com/Harmfulllll/Vigenere-Cipher"
                    />
                </div>

            </div>
            <div className="card-container">
                <div className="card-data">
                    <Card
                        image="./holachat.png"
                        title="HolaChat"
                        tags={["React","Socket","Redux", "Node", "Express", "MongoDB"]}
                        description="This is a real time chat application that allows users to communicate with each other."
                        link="https://github.com/Harmfulllll/holaChat"
                    />
                </div>
                <div className="card-data">
                    <Card
                        image="./project.png"
                        title="Expense Tracker"
                        tags={['Node', 'Express', 'MongoDB']}
                        description="
                        Backend for a simple expense tracker application that allows users to track their expenses.
                        "
                        link="https://github.com/Harmfulllll/Expense-Tracker-Backend"
                    />
                </div>

            </div>
        </motion.div>
    );
}
    export default Projects;