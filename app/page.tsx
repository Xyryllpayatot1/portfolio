'use client'

import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBriefcase,
  faCode,
  faEnvelope,
  faHouse,
  faLaptopCode,
  faLayerGroup,
  faMessage,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const heroImages = [
  '/pictures/540420865_2573014236425105_7755389066504817580_n.jpg',
  '/pictures/538703578_815169917507753_8804508031377158415_n.jpg',
  '/pictures/633558039_916952220840716_2449322185127861914_n.jpg',
  '/pictures/ba117ca1-ffc5-4c62-b83e-2e51b8494bb5.jpeg',
  '/pictures/c416affa-efcd-4121-860d-6d9d796dce7e.jpeg',
  '/pictures/6fa37d7f-26b9-4d59-a667-6cda4c7a16de.jpeg',
]

const tickerWords = [
  'Design',
  'Layout',
  'Clarity',
  'Motion',
  'Results',
  'Trust',
  'Speed',
  'Quality',
  'Impact',
  'Vision',
  'Logic',
  'Detail',
  'Craft',
  'Precision',
  'Clean',
  'Modern',
]

const skills = [
  'Next.js',
  'TypeScript',
  'JavaScript',
  'PHP',
  'Python',
  'MySQL',
  'UI Systems',
  'Automation',
]

const services = [
  {
    icon: faLaptopCode,
    title: 'Business Websites',
    description:
      'Marketing sites that look credible, load fast, and convert visitors into inquiries.',
  },
  {
    icon: faLayerGroup,
    title: 'Custom Systems',
    description:
      'School and small-business software built around the way people actually work.',
  },
  {
    icon: faCode,
    title: 'Launch Support',
    description:
      'From debugging to deployment, I handle the technical cleanup needed to ship confidently.',
  },
]

const projects = [
  {
    title: 'SSLG Online Voting System',
    description:
      'A secure election platform with real-time voting, automated tabulation, and deployment-ready reliability.',
    image: '/screenshots/SSLG Online Voting System.png',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    link: null,
  },
  {
    title: 'School PhotoBooth Web System',
    description:
      'A custom event photo booth workflow that replaced rental costs and ran successfully during school programs.',
    image: '/screenshots/School PhotoBooth Web System.png',
    tech: ['JavaScript', 'HTML/CSS', 'PHP'],
    link: null,
  },
  {
    title: 'Panel of Judges Tabulation System',
    description:
      'A scoring engine designed for fast event changes, accurate calculations, and smooth live operations.',
    image: '/screenshots/Panel of Judges Tabulation System.png',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    link: null,
  },
  {
    title: 'Brewed Haven Café Website',
    description:
      'A polished cafe brand website with immersive storytelling, menu sections, reviews, and reservation flow.',
    image: '/screenshots/Brewed Haven Café Website.jpeg',
    tech: ['Next.js', 'TypeScript', 'CSS'],
    link: '/cafe',
  },
]

const testimonials = [
  {
    initials: 'MZ',
    name: 'Mark Zoren MJ',
    location: 'ICT Adviser, MRMNHS',
    text: "Xy is one of my students and also the Project Manager of our ICT Club. As the club's Adviser, I am constantly amazed by him. Every time the ICT Club has a project, he thinks very quickly to create the programs we need. He is very enthusiastic and dedicated to finishing his work without errors. He thinks so fast! I remember a school event that required a tabulation system when the organizers approached me at the last minute because of a change in scoring. I asked Xy what we could do, and he simply said, 'I can handle it, Sir.' I was shocked! He managed to change the system on the spot. I realized then that a young programmer like him will surely achieve great things in life.",
  },
  {
    initials: 'MT',
    name: 'Mark Thompson',
    location: 'Restaurant Owner, Brisbane Australia',
    text: 'Found Xy through social media and decided to work with them despite the distance. The video call meetings made coordination easy despite the time zone difference. Delivered a custom website for our cafe that increased our online orders significantly. Great communication and patience throughout the project. Will recommend!',
  },
  {
    initials: 'MS',
    name: 'Maria Santos',
    location: 'IT Manager, Manila Philippines',
    text: 'Our school needed a voting system for our student council elections. Xy was professional and understanding of our requirements even though we had limited technical knowledge. The system worked flawlessly on election day and the results were accurate. Very satisfied with the outcome. Will definitely hire again for future projects.',
  },
  {
    initials: 'JL',
    name: 'John Liu',
    location: 'Retail Store Owner, Cebu City Philippines',
    text: 'Needed an inventory management system for our store. Xy took the time to understand our business process and delivered exactly what we needed. The system has helped us track our stock much better. Patient developer who listens to feedback. Highly recommend for local businesses looking for custom solutions.',
  },
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [activeDock, setActiveDock] = useState('top')
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonialRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const sectionIds = ['top', 'about', 'work', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveDock(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleTestimonialScroll = () => {
    const el = testimonialRowRef.current
    if (!el) return
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth)
    const index = Math.round(progress * (testimonials.length - 1))
    setActiveTestimonial(Math.max(0, Math.min(index, testimonials.length - 1)))
  }

  return (
    <main className="portfolio-shell">
      <nav className="site-nav">
        <div className="container nav-inner">
          <a href="#top" className="brand-mark">JXS</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero-panel" id="top">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-intro">
              <p className="eyebrow">Software Developer · System Builder · Philippines</p>
              <h1>
                Digital work that feels
                <span> sharp, dependable, and alive.</span>
              </h1>
              <p className="hero-summary">
                I build business websites and custom software systems for schools and small
                teams that need clean design, strong logic, and production-ready execution.
              </p>
            </div>

            <div className="hero-cta">
              <div className="hero-actions">
                <a href="#work" className="primary-action">
                  <FontAwesomeIcon icon={faBriefcase} />
                  See selected work
                </a>
                <a href="#contact" className="secondary-action">
                  <FontAwesomeIcon icon={faEnvelope} />
                  Start a project
                </a>
              </div>
              <div className="hero-metrics">
                <div>
                  <strong>15+</strong>
                  <span>Projects delivered</span>
                </div>
                <div>
                  <strong>4+</strong>
                  <span>Years building</span>
                </div>
                <div>
                  <strong>17</strong>
                  <span>Years old, already shipping</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card-main hero-slider">
              {heroImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt="Portfolio highlight"
                  className={index === currentImage ? 'hero-slide active' : 'hero-slide'}
                />
              ))}
            </div>
            <div className="hero-card hero-card-note">
              <p>Recent focus</p>
              <strong>Interfaces with stronger visual identity, cleaner structure, and clearer trust signals.</strong>
            </div>
            <div className="hero-card hero-card-stack">
              <span>Core stack</span>
              <div className="skill-cloud">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Design highlights">
        <div className="ticker-set">
          {tickerWords.map((word, i) => (
            <span key={`a-${i}`} className="ticker-item">{word}</span>
          ))}
        </div>
        <div className="ticker-set" aria-hidden="true">
          {tickerWords.map((word, i) => (
            <span key={`b-${i}`} className="ticker-item">{word}</span>
          ))}
        </div>
      </section>

      <section className="story-section" id="about">
        <div className="container split-layout">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Young builder, serious execution.</h2>
          </div>
          <div className="story-body">
            <p>
              I started coding at 13 and quickly moved from experiments into real systems
              used by schools and local businesses. That shaped how I work now: less theory,
              more practical results.
            </p>
            <p>
              My edge is combining implementation with presentation. I care about logic,
              but I also care whether the final product looks trustworthy, feels modern,
              and matches the ambition behind it.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">What I Do</p>
            <h2>Focused, high-value work.</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section" id="work">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2>Projects with real use, not just mockups.</h2>
            </div>
            <p className="section-note">
              A mix of school systems, business work, and one interactive brand demo included in this repo.
            </p>
          </div>

          <div className="project-showcase">
            {projects.map((project) => {
              const card = (
                <article className="project-card">
                  <div className="project-media">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-body">
                    <div className="project-topline">
                      <h3>{project.title}</h3>
                      {project.link && <span className="live-pill">Live demo</span>}
                    </div>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.tech.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    {project.link && (
                      <span className="project-link">
                        View project
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    )}
                  </div>
                </article>
              )

              return project.link ? (
                <a
                  key={project.title}
                  href={project.link}
                  className="project-anchor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card}
                </a>
              ) : (
                <div key={project.title}>{card}</div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Proof</p>
            <h2>Clients notice the difference.</h2>
          </div>
          <div className="testimonial-row" ref={testimonialRowRef} onScroll={handleTestimonialScroll}>
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.initials}</div>
                  <div className="testimonial-identity">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p>{testimonial.text}</p>
              </article>
            ))}
          </div>
          <div className="testimonial-dots" aria-hidden="true">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot${i === activeTestimonial ? ' active' : ''}`}
                onClick={() => {
                  const el = testimonialRowRef.current
                  if (!el) return
                  const cardWidth = el.scrollWidth / testimonials.length
                  el.scrollTo({ left: i * cardWidth, behavior: 'smooth' })
                  setActiveTestimonial(i)
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Need a stronger version of your site or system?</h2>
            <p className="contact-copy">
              If the goal is better design, clearer trust, and working software underneath it, I can help.
            </p>
          </div>
          <div className="contact-actions">
            <a href="https://wa.me/639917120857" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FontAwesomeIcon icon={faWhatsapp} />
              <div>
                <strong>WhatsApp</strong>
                <span>+63 991 512 0857</span>
              </div>
            </a>
            <a href="mailto:jhonxyryll@gmail.com" className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} />
              <div>
                <strong>Email</strong>
                <span>jhonxyryll@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Jhon Xyryll Samoy</p>
          <div className="footer-links">
            <a href="mailto:jhonxyryll@gmail.com" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="#" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </footer>

      <nav className="mobile-dock" aria-label="Mobile navigation">
        <a href="#top" className={activeDock === 'top' ? 'dock-active' : ''}>
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </a>
        <a href="#about" className={activeDock === 'about' ? 'dock-active' : ''}>
          <FontAwesomeIcon icon={faLayerGroup} />
          <span>About</span>
        </a>
        <a href="#work" className={activeDock === 'work' ? 'dock-active' : ''}>
          <FontAwesomeIcon icon={faBriefcase} />
          <span>Work</span>
        </a>
        <a href="#contact" className={activeDock === 'contact' ? 'dock-active' : ''}>
          <FontAwesomeIcon icon={faMessage} />
          <span>Contact</span>
        </a>
      </nav>
    </main>
  )
}
