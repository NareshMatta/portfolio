import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './Home.css';

const Home = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      id="home"
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="home-container">
        <motion.div className="greeting" variants={itemVariants}>
          <h1>Hi There! 👋</h1>
        </motion.div>
        
        <motion.div className="intro" variants={itemVariants}>
          <h2>I'M <span className="name">Matta Naresh Babu</span></h2>
        </motion.div>

        <motion.div className="roles" variants={itemVariants}>
          {showTypewriter && (
            <div className="typewriter-container">
              <Typewriter
                options={{
                  strings: [
                    'Software Engineer',
                    'MERN Stack Developer',
                    'Front End Developer'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  pauseFor: 2000,
                }}
              />
            </div>
          )}
        </motion.div>

        <motion.div className="cta-buttons" variants={itemVariants}>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            About Me
          </motion.button>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </motion.button>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;