import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub
} from 'react-icons/si';
import './About.css';

const About = () => {
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

  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
    { name: 'React', icon: SiReact, color: '#61dafb' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
    { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572b6' },
    { name: 'Git', icon: SiGit, color: '#f05032' },
    // { name: 'GitHub', icon: SiGithub, color: '#181717' },
  ];

  return (
    <motion.div 
      id="about"
      className="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="about-container">
        <motion.div className="about-header" variants={itemVariants}>
          <h1>LET ME INTRODUCE MYSELF</h1>
          <div className="divider"></div>
        </motion.div>

        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-text">
            <p>
              I fell in love with programming and I have at least learnt something, I think... 🤷‍♂️
            </p>
            <p>
              I am passionate about creating dynamic and responsive web applications using modern technologies.
              My journey in software development has been driven by curiosity and a constant desire to learn new things.
            </p>
            <p>
              I specialize in <span className="highlight">MERN Stack</span> development and enjoy building 
              applications that provide excellent user experiences and solve real-world problems.
            </p>
          </div>

          <div className="profile-image">
            <motion.div 
              className="image-placeholder"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="avatar" >MNB</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="skills-section" variants={itemVariants}>
          <h2>MERN Stack Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: `0 10px 30px ${skill.color}40`
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <skill.icon 
                  className="skill-icon" 
                  style={{ color: skill.color }} 
                />
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="fun-fact" variants={itemVariants}>
          <p>
            Apart from coding, I enjoy exploring new technologies, contributing to open-source projects,
            and continuously improving my development skills.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;