import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [currentTheme, setCurrentTheme] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [particles, setParticles] = useState([]);
  const [orbs, setOrbs] = useState([]);
  
  // Theme color schemes with light colors
  const themes = {
    home: {
      primary: '#93c5fd', // Light blue
      secondary: '#c4b5fd', // Light purple  
      tertiary: '#fbbf24', // Light yellow
      accent: '#fb923c' // Light orange
    },
    about: {
      primary: '#fbbf24', // Light yellow
      secondary: '#fb923c', // Light orange
      tertiary: '#f59e0b', // Warm yellow
      accent: '#f97316' // Light amber
    },
    experience: {
      primary: '#c4b5fd', // Light purple
      secondary: '#a78bfa', // Medium purple
      tertiary: '#8b5cf6', // Violet
      accent: '#7c3aed' // Deep purple
    },
    projects: {
      primary: '#93c5fd', // Light blue
      secondary: '#3b82f6', // Blue
      tertiary: '#2563eb', // Medium blue
      accent: '#1d4ed8' // Deep blue
    },
    resume: {
      primary: '#fb923c', // Light orange
      secondary: '#f97316', // Orange
      tertiary: '#ea580c', // Medium orange
      accent: '#c2410c' // Deep orange
    }
  };
  
  
  const currentColors = themes[currentTheme] || themes.home;

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const particleArray = [];
      for (let i = 0; i < 80; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 5,
        });
      }
      setParticles(particleArray);
    };
    
    generateParticles();
  }, []);

  // Generate glowing orbs
  useEffect(() => {
    const generateOrbs = () => {
      const orbArray = [];
      for (let i = 0; i < 6; i++) {
        orbArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 200 + 100,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 10,
        });
      }
      setOrbs(orbArray);
    };
    
    generateOrbs();
  }, []);

  // Track mouse movement
  const handleMouseMove = useCallback((e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="background-animation">
      {/* Animated Gradient Base */}
      <motion.div 
        className="gradient-base"
        animate={{
          background: `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, 
            ${currentColors.primary}10 0%, 
            ${currentColors.secondary}08 30%, 
            #0a192f 70%, 
            #000000 100%)`
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Floating Orbs */}
      <div className="floating-orbs">
        {orbs.map((orb, index) => (
          <motion.div
            key={orb.id}
            className="orb"
            animate={{
              x: [
                `${orb.x}%`, 
                `${(orb.x + 30) % 100}%`, 
                `${(orb.x + 60) % 100}%`, 
                `${orb.x}%`
              ],
              y: [
                `${orb.y}%`, 
                `${(orb.y + 20) % 100}%`, 
                `${(orb.y + 40) % 100}%`, 
                `${orb.y}%`
              ],
              scale: [1, 1.3, 0.8, 1],
              opacity: [0.3, 0.6, 0.2, 0.3],
              background: [
                `radial-gradient(circle, ${currentColors.primary}30, transparent)`,
                `radial-gradient(circle, ${currentColors.secondary}30, transparent)`,
                `radial-gradient(circle, ${currentColors.tertiary}30, transparent)`,
                `radial-gradient(circle, ${currentColors.primary}30, transparent)`
              ]
            }}
            transition={{
              duration: orb.duration,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              position: 'absolute',
              borderRadius: '50%',
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            animate={{
              x: [
                `${particle.x}%`,
                `${(particle.x + particle.speedX * 50) % 100}%`,
                `${(particle.x + particle.speedX * 100) % 100}%`,
                `${particle.x}%`
              ],
              y: [
                `${particle.y}%`,
                `${(particle.y + particle.speedY * 50) % 100}%`,
                `${(particle.y + particle.speedY * 100) % 100}%`,
                `${particle.y}%`
              ],
              opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 25,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              position: 'absolute',
              background: `radial-gradient(circle, ${currentColors.primary}, transparent)`,
              borderRadius: '50%',
              boxShadow: `0 0 ${particle.size * 2}px ${currentColors.primary}50`,
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="geometric-shapes">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="geometric-shape"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.1, 0.4, 0.1],
              x: [0, 50, -30, 0],
              y: [0, -40, 30, 0],
            }}
            transition={{
              duration: 15 + index * 2,
              delay: index * 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              left: `${(index * 8 + 10) % 90}%`,
              top: `${(index * 12 + 20) % 80}%`,
              width: `${20 + index * 3}px`,
              height: `${20 + index * 3}px`,
              border: `1px solid ${currentColors.tertiary}40`,
              borderRadius: index % 3 === 0 ? '50%' : '0%',
              background: index % 2 === 0 ? 
                `linear-gradient(45deg, ${currentColors.secondary}20, transparent)` : 
                'transparent',
            }}
          />
        ))}
      </div>

      {/* Pulse Rings */}
      <div className="pulse-rings">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            className="pulse-ring"
            animate={{
              scale: [0.5, 2.5, 0.5],
              opacity: [0.8, 0.1, 0.8],
            }}
            transition={{
              duration: 4,
              delay: index * 0.8,
              repeat: Infinity,
              ease: "easeOut"
            }}
            style={{
              position: 'absolute',
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
              width: '100px',
              height: '100px',
              border: `2px solid ${currentColors.accent}60`,
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Interactive Light Trails */}
      <motion.div
        className="light-trail"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            ${currentColors.primary}40 0%, 
            ${currentColors.secondary}20 20%, 
            transparent 50%)`
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      {/* Flowing Lines */}
      <svg className="flowing-lines" width="100%" height="100%">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={`${currentColors.primary}60`} />
            <stop offset="50%" stopColor={`${currentColors.secondary}40`} />
            <stop offset="100%" stopColor={`${currentColors.tertiary}60`} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Curved flowing lines */}
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.path
            key={index}
            d={`M${index * 15},-10 Q${50 + index * 10},${30 + index * 20} ${100 + index * 5},${index * 15 + 50} T${index * 20 + 120},${80 + index * 10}`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.6, 0] 
            }}
            transition={{
              duration: 8,
              delay: index * 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default BackgroundAnimation;