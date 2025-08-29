import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
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

  const projects = [
    {
      title: "Ecomm-react-coffee-master",
      description: "A full-stack e-commerce platform built with MERN stack featuring user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe API"],
      github: "https://github.com/NareshMatta/ecomm-react-coffee-master",
      demo: "http://localhost:3001/ecomm-react/",
      image: "project1"
    },
    {
      title: "Task Management Dashboard",
      description: "A responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.IO", "MongoDB", "Material-UI"],
      github: "#",
      demo: "#",
      image: "project2"
    },
    {
      title: "Social Media Platform",
      description: "A social networking platform with user profiles, post creation, real-time messaging, and friend connections using MERN stack.",
      technologies: ["React", "Express", "Node.js", "MongoDB", "Socket.IO", "Cloudinary"],
      github: "#",
      demo: "#",
      image: "project3"
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application that provides current weather data and forecasts with location-based services and beautiful UI.",
      technologies: ["React", "OpenWeather API", "CSS3", "Geolocation API"],
      github: "#",
      demo: "#",
      image: "project4"
    }
  ];

  return (
    <motion.div 
      id="projects"
      className="projects"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="projects-container">
        <motion.div className="projects-header" variants={itemVariants}>
          <h1>My Projects</h1>
          <div className="divider"></div>
          <p>Here are some of my recent projects that showcase my skills and experience</p>
        </motion.div>

        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <FaLaptopCode className="project-icon" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn btn-github"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn btn-demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="projects-cta" variants={itemVariants}>
          <h2>Want to see more?</h2>
          <p>Check out my GitHub for more projects and contributions</p>
          <motion.a
            href="https://github.com/NareshMatta"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> View All Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;