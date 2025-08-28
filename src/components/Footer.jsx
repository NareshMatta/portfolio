import { motion } from 'framer-motion';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope,
  FaHeart
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: 'https://www.linkedin.com/in/mattanareshbabu/',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/NareshMatta',
      color: '#333'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/your-username',
      color: '#1da1f2'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/',
      color: '#e4405f'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:your.email@example.com',
      color: '#ea4335'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="footer-container">
        <motion.div className="footer-content" variants={containerVariants}>
          <motion.div className="footer-info" variants={itemVariants}>
            <h3>Matta Naresh Babu</h3>
            <p>MERN Stack Developer passionate about creating amazing web experiences</p>
          </motion.div>

          <motion.div className="social-links" variants={containerVariants}>
            <h4>Connect with me</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2,
                    y: -5,
                    boxShadow: `0 10px 25px ${social.color}40`
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{ '--hover-color': social.color }}
                >
                  <social.icon />
                  <span className="tooltip">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="footer-divider" variants={itemVariants}>
          <div className="divider-line"></div>
        </motion.div>

        <motion.div className="footer-bottom" variants={itemVariants}>
          <p>
            © {new Date().getFullYear()} Matta Naresh Babu. Made with{' '}
            <motion.span
              className="heart"
              animate={{
                scale: [1, 1.2, 1],
                color: ['#e74c3c', '#ff6b6b', '#e74c3c']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaHeart />
            </motion.span>{' '}
            and React.js
          </p>
          <p className="footer-note">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
        </motion.div>

        <motion.div 
          className="floating-elements"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;