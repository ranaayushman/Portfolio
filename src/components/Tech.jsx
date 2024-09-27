import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaCss3Alt } from "react-icons/fa"; // Example icons
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
} from "react-icons/si"; // Example icons

const techStack = [
  { name: "React", icon: <FaReact size={64} /> },
  { name: "Next.js", icon: <SiNextdotjs size={64} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={64} /> },
  { name: "TypeScript", icon: <SiTypescript size={64} /> },
  { name: "Framer Motion", icon: <SiFramer size={64} /> },
  // Add more technologies as needed
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Tech = () => {
  return (
    <section className="py-12 bg-custom-purple" id="tech">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <motion.div className="mb-4" whileHover={{ scale: 1.1 }}>
                {tech.icon}
              </motion.div>
              <motion.h3
                className="text-lg font-semibold text-center"
                whileHover={{ scale: 1.1 }}
              >
                {tech.name}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
