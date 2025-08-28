import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Software Development",
      duration: "1.5 Years",
      description: [
        "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
        "Built responsive and interactive user interfaces with modern React features",
        "Implemented RESTful APIs and integrated third-party services",
        "Worked with databases, authentication systems, and deployment workflows",
        "Collaborated on various projects from concept to production"
      ]
    }
  ];

  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML5 & CSS3",
    "RESTful APIs",
    "Git & GitHub",
    "Responsive Design",
   
    "Authentication & Authorization",
  ];

  return (
    <motion.div 
      id="experience"
      className="experience"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="experience-container">
        <motion.div className="experience-header" variants={itemVariants}>
          <h1>My Experience</h1>
          <div className="divider"></div>
          <p>1.5 Years of Experience as a MERN Stack Developer</p>
        </motion.div>

        <motion.div className="experience-content" variants={itemVariants}>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="timeline-marker">
                  <FaBriefcase />
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.title}</h3>
                    <div className="timeline-meta">
                      <span className="company">{exp.company}</span>
                      <span className="duration">
                        <FaCalendarAlt /> {exp.duration}
                      </span>
                    </div>
                  </div>
                  <ul className="timeline-description">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="skills-summary" variants={itemVariants}>
          <h2>Technical Skills & Expertise</h2>
          <div className="skills-tags">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="skill-tag"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div className="experience-stats" variants={itemVariants}>
          <div className="stat-item">
            <h3>1.5</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Technologies Mastered</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;