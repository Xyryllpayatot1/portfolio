'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faStar, faArrowRight, faCode, faMapMarkerAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'

const heroImages = [
  '/pictures/540420865_2573014236425105_7755389066504817580_n.jpg',
  '/pictures/538703578_815169917507753_8804508031377158415_n.jpg',
  '/pictures/633558039_916952220840716_2449322185127861914_n.jpg',
  '/pictures/ba117ca1-ffc5-4c62-b83e-2e51b8494bb5.jpeg',
  '/pictures/c416affa-efcd-4121-860d-6d9d796dce7e.jpeg',
]

const skills = [
  'JavaScript', 'PHP', 'Python', 'C++', 'MySQL', 'XAMPP', 'HTML/CSS', 'Node.js', 'Next.js', 'Google Ads', 'AI Automation'
]

const projects = [
  {
    title: 'SSLG Online Voting System',
    description: 'A secure digital voting platform for school elections with real time voting, accurate tabulation, and seamless deployment.',
    image: 'https://photouploads.com/i/jCLk.png',
    tech: ['PHP', 'MySQL', 'JavaScript']
  },
  {
    title: 'School PhotoBooth Web System',
    description: 'A custom web based photobooth platform that eliminated rental costs, fully functional for school events.',
    image: 'https://photouploads.com/i/jCLl.png',
    tech: ['JavaScript', 'HTML/CSS', 'PHP']
  },
  {
    title: 'Panel of Judges Tabulation System',
    description: 'A scoring and tabulation system for school competitions with accurate calculations and fast results processing.',
    image: 'https://photouploads.com/i/jCLV.png',
    tech: ['PHP', 'MySQL', 'JavaScript']
  }
]

const testimonials = [
  {
    name: 'David Mitchell',
    location: 'Restaurant Owner, London UK',
    initials: 'DM',
    text: 'Xy built our restaurant\'s online ordering system and website. The system handles our daily orders seamlessly and the website looks fantastic. Professional, responsive, and delivered exactly what we needed. Highly recommended!'
  },
  {
    name: 'Sarah Reynolds',
    location: 'School Administrator, Sydney Australia',
    initials: 'SR',
    text: 'Our school needed a secure voting system for student council elections. Xy delivered a professional, easy to use system that made our election process smooth and transparent. The real time results feature was incredibly helpful. Excellent work!'
  },
  {
    name: 'James Carter',
    location: 'Small Business Owner, Texas USA',
    initials: 'JC',
    text: 'Needed a custom inventory management system for my retail store. Xy understood our requirements perfectly and delivered a system that has saved us countless hours. Great communication throughout the project. Will definitely work with them again.'
  }
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <main>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo">TXY</a>
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </div>
          <button className="mobile-toggle" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          {heroImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Hero background"
              className={index === currentImage ? 'active' : ''}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="greeting">
                <span></span>
                Hello, I&apos;m
              </div>
              <h1>Jhon Xyryll <span className="highlight">Samoy</span></h1>
              <p className="subtitle">A Young Software Developer and System Engineer from the Philippines</p>
              <div className="hero-buttons">
                <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                  <FontAwesomeIcon icon={faBriefcase} />
                  View Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                  <FontAwesomeIcon icon={faEnvelope} />
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p>Get to know the person behind the code</p>
          </div>
          <div className="about-grid">
            <div className="about-image">
              <div className="about-img-box">
                <img src="/pictures/633558039_916952220840716_2449322185127861914_n.jpg" alt="Jhon Xyryll Samoy" />
              </div>
            </div>
            <div className="about-content">
              <h3>Building Digital Solutions with Purpose</h3>
              <p>
                I&apos;m a 15 year old developer with over 5 years of coding experience, passionate about building
                real world digital systems. I started my journey at age 10 and have developed multiple
                production systems deployed in school environments and small businesses.
              </p>
              <p>
                I specialize in creating custom websites for small businesses and building school management
                systems. From debugging complex issues to handling live deployments, I bring an engineering
                mindset to every project. My goal is to help businesses and schools streamline their operations
                through efficient, reliable digital solutions.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h4>15+</h4>
                  <span>Projects Completed</span>
                </div>
                <div className="stat-item">
                  <h4>5+</h4>
                  <span>Years Coding</span>
                </div>
                <div className="stat-item">
                  <h4>100%</h4>
                  <span>Client Satisfaction</span>
                </div>
              </div>
              <div className="skills-section">
                <h4>Tech Stack</h4>
                <div className="skills-grid">
                  {skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Clients Say</h2>
            <p>Feedback from businesses and schools I&apos;ve worked with</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.initials}</div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
                <div className="testimonial-stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Some of the systems I&apos;ve built and deployed</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Have a project in mind? Let&apos;s talk about it.</p>
          </div>
          <div className="contact-options">
            <a href="https://wa.me/639915120857" className="contact-option" target="_blank" rel="noopener noreferrer">
              <div className="contact-option-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <div className="contact-option-text">
                <h3>WhatsApp</h3>
                <p>+63 991 512 0857</p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a href="mailto:xyryllsamoy@gmail.com" className="contact-option">
              <div className="contact-option-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-option-text">
                <h3>Email</h3>
                <p>xyryllsamoy@gmail.com</p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 Jhon Xyryll Samoy. All Rights Reserved.</p>
            <div className="social-links">
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="mailto:xyryllsamoy@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
