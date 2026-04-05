'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'

const heroImages = [
  '/pictures/540420865_2573014236425105_7755389066504817580_n.jpg',
  '/pictures/538703578_817169917507753_8804508031377178417_n.jpg',
  '/pictures/633558039_916952220840716_2449322185127861914_n.jpg',
  '/pictures/ba117ca1-ffc5-4c62-b83e-2e51b8494bb5.jpeg',
  '/pictures/c416affa-efcd-4121-860d-6d9d796dce7e.jpeg',
]

const skills = ['JavaScript', 'PHP', 'Python', 'C++', 'MySQL', 'HTML/CSS', 'Node.js', 'Next.js', 'Google Ads', 'AI Automation']

const projects = [
  { title: 'SSLG Online Voting System', description: 'A secure digital voting platform for school elections with real time voting, accurate tabulation, and seamless deployment.', image: 'https://photouploads.com/i/jCLk.png', tech: ['PHP', 'MySQL', 'JavaScript'] },
  { title: 'School PhotoBooth Web System', description: 'A custom web based photobooth platform that eliminated rental costs, fully functional for school events.', image: 'https://photouploads.com/i/jCLl.png', tech: ['JavaScript', 'HTML/CSS', 'PHP'] },
  { title: 'Panel of Judges Tabulation System', description: 'A scoring and tabulation system for school competitions with accurate calculations and fast results processing.', image: 'https://photouploads.com/i/jCLV.png', tech: ['PHP', 'MySQL', 'JavaScript'] }
]

const testimonials = [
  { name: 'Mark Thompson', location: 'Restaurant Owner, Brisbane Australia', initials: 'MT', text: "Found Xy through social media and decided to work with them despite the distance. The video call meetings made coordination easy despite the time zone difference. Delivered a custom website for our cafe that increased our online orders significantly. Great communication and patience throughout the project. Will recommend!" },
  { name: 'Maria Santos', location: 'School Principal, Manila Philippines', initials: 'MS', text: "Our school needed a voting system for our student council elections. Xy was professional and understanding of our requirements even though we had limited technical knowledge. The system worked flawlessly on election day and the results were accurate. Very satisfied with the outcome. Will definitely hire again for future projects." },
  { name: 'John Liu', location: 'Retail Store Owner, Cebu City Philippines', initials: 'JL', text: "Needed an inventory management system for our store. Xy took the time to understand our business process and delivered exactly what we needed. The system has helped us track our stock much better. Patient developer who listens to feedback. Highly recommend for local businesses looking for custom solutions." }
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">TXY</a>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-bg">
          {heroImages.map((src, index) => (
            <img key={index} src={src} alt="Hero background" className={index === currentImage ? 'active' : ''} />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="greeting"><span></span>Hello, I&apos;m</div>
              <h1>Jhon Xyryll <span className="highlight">Samoy</span></h1>
              <p className="subtitle">A Young Software Developer and System Engineer from the Philippines</p>
              <div className="hero-buttons">
                <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                  <FontAwesomeIcon icon={faBriefcase} />View Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                  <FontAwesomeIcon icon={faEnvelope} />Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p>Get to know the person behind the code</p>
          </div>
          <div className="about-grid">
            <div className="about-img-box">
              <img src="/pictures/633558039_916952220840716_2449322185127861914_n.jpg" alt="Jhon Xyryll Samoy" />
            </div>
            <div className="about-content">
              <h3>Building Digital Solutions with Purpose</h3>
              <p>I'm a 17 year old developer with over 7 years of coding experience, passionate about building real world digital systems. I started my journey at age 13 and have developed multiple production systems deployed in school environments and small businesses.</p>
              <p>I specialize in creating custom websites for small businesses and building school management systems. From debugging complex issues to handling live deployments, I bring an engineering mindset to every project.</p>
              <div className="stats-grid">
                <div className="stat-item"><h4>15+</h4><span>Projects Completed</span></div>
                <div className="stat-item"><h4>4+</h4><span>Years Coding</span></div>
                <div className="stat-item"><h4>100%</h4><span>Client Satisfaction</span></div>
              </div>
              <div className="skills-grid">
                {skills.map((skill) => (<span key={skill} className="skill-tag">{skill}</span>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Clients Say</h2>
            <p>Feedback from clients I've worked with</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div className="testimonial-info"><h4>{t.name}</h4><span>{t.location}</span></div>
                </div>
                <div className="testimonial-stars">
                  <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                </div>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Some of the systems I&apos;ve built and deployed</p>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-image"><img src={p.image} alt={p.title} /></div>
                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="project-tech">{p.tech.map((t) => (<span key={t}>{t}</span>))}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Have a project in mind? Let&apos;s talk about it.</p>
          </div>
          <div className="contact-options">
            <a href="https://wa.me/639917120857" className="contact-option" target="_blank" rel="noopener noreferrer">
              <div className="contact-option-icon"><FontAwesomeIcon icon={faWhatsapp} /></div>
              <div className="contact-option-text"><h3>WhatsApp</h3><p>+63 991 512 0857</p></div>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a href="mailto:jhonxyryll@gmail.com" className="contact-option">
              <div className="contact-option-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
              <div className="contact-option-text"><h3>Email</h3><p>jhonxyryll@gmail.com</p></div>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 Jhon Xyryll Samoy. All Rights Reserved.</p>
            <div className="social-links">
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="mailto:jhonxyryll@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
