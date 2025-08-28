import { motion } from 'framer-motion';
import { FaDownload, FaUser, FaBriefcase, FaGraduationCap, FaCode, FaCertificate } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
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

  const handleDownloadResume = () => {
    // Create a dummy PDF download (replace with actual resume file)
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume file path
    link.download = 'Matta_Naresh_Babu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      id="resume"
      className="resume"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="resume-container">
        <motion.div className="resume-header" variants={itemVariants}>
          <h1>My Resume</h1>
          <div className="divider"></div>
          <p>Download my complete resume or view the details below</p>
          
          <motion.button
            className="download-btn"
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download Resume
          </motion.button>
        </motion.div>

        <div className="resume-content">
          <motion.section className="resume-section" variants={itemVariants}>
            <div className="section-header">
              <FaUser className="section-icon" />
              <h2>Personal Information</h2>
            </div>
            <div className="section-content">
              <div className="info-grid">
                <div className="info-item">
                  <strong>Name:</strong> Matta Naresh Babu
                </div>
                <div className="info-item">
                  <strong>Domine:</strong> MERN Stack Developer
                </div>
                <div className="info-item">
                  <strong>Role:</strong> Front-End Developer
                </div>
                <div className="info-item">
                  <strong>Experience:</strong> 1.5 Years
                </div>
                <div className="info-item">
                  <strong>Location:</strong> Hyderabad
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section className="resume-section" variants={itemVariants}>
            <div className="section-header">
              <FaBriefcase className="section-icon" />
              <h2>Professional Experience</h2>
            </div>
            <div className="section-content">
              <div className="experience-item">
                <div className="experience-header">
                  <h3>MERN Stack Developer</h3>
                  <span className="duration">1.5 Years</span>
                </div>
                <div className="experience-description">
                  <ul>
                    <li>Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js</li>
                    <li>Built responsive and interactive user interfaces with modern React features</li>
                    <li>Implemented RESTful APIs and integrated third-party services</li>
                    <li>Worked with databases, authentication systems, and deployment workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section className="resume-section" variants={itemVariants}>
            <div className="section-header">
              <FaCode className="section-icon" />
              <h2>Technical Skills</h2>
            </div>
            <div className="section-content">
              <div className="skills-categories">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">JavaScript ES6+</span>
                    <span className="skill-tag">Responsive Design</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express.js</span>
                    <span className="skill-tag">RESTful APIs</span>
                    {/* <span className="skill-tag">JWT Authentication</span> */}
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Database & Tools</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">Git & GitHub</span>
                    <span className="skill-tag">VS Code</span>
                    <span className="skill-tag">Postman</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section className="resume-section" variants={itemVariants}>
            <div className="section-header">
              <FaGraduationCap className="section-icon" />
              <h2>Education</h2>
            </div>
            <div className="section-content">
              <div className="education-item">
                <h3>Bachelor's Degree</h3>
                <p className="education-details">Mechanical Engineering </p>
                <p className="education-year">Graduated</p>
              </div>
            </div>
          </motion.section>

          <motion.section className="resume-section" variants={itemVariants}>
            <div className="section-header">
              <FaCertificate className="section-icon" />
              <h2>Certifications & Achievements</h2>
            </div>
            <div className="section-content">
              <div className="achievements-list">
                <div className="achievement-item">
                  <h4>MERN Stack Development</h4>
                  <p>Completed comprehensive MERN stack development course</p>
                </div>
                <div className="achievement-item">
                  <h4>Full-Stack Web Development</h4>
                  <p>Built multiple full-stack applications with modern technologies</p>
                </div>
                <div className="achievement-item">
                  <h4>Responsive Web Design</h4>
                  <p>Expertise in creating mobile-first responsive applications</p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* <motion.div className="resume-cta" variants={itemVariants}>
          <h3>Interested in working together?</h3>
          <p>Feel free to reach out to discuss opportunities or collaborations</p>
          <motion.button
            className="contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default Resume;