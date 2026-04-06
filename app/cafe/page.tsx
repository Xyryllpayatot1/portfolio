import styles from './page.module.css'
import ReviewPopup from './ReviewPopup'
import MenuSection from './MenuSection'
import ReservationForm from './ReservationForm'

export const metadata = {
  title: 'Brewed Haven Café | Where Every Sip Tells a Story',
  description: 'A cozy specialty coffee shop serving handcrafted espresso drinks, freshly baked pastries, and light meals in the heart of the city.',
}


const testimonials = [
  {
    initials: 'AC',
    name: 'Anna Cruz',
    role: 'Regular Customer',
    stars: 5,
    text: '"Brewed Haven is genuinely my happy place. The caramel latte is perfect every single time, and the staff remembers your order. That kind of warmth is rare."',
  },
  {
    initials: 'MR',
    name: 'Miguel Reyes',
    role: 'Remote Worker',
    stars: 5,
    text: '"I work here almost every day. Fast WiFi, great coffee, no pressure to leave. The avocado toast keeps me going through long mornings. Best spot in the city."',
  },
  {
    initials: 'SL',
    name: 'Sofia Lim',
    role: 'Food Blogger',
    stars: 5,
    text: '"The attention to detail here is extraordinary. From the latte art to the plating, every item is crafted with intention. Worth every peso and then some."',
  },
]

function IconLocation() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
function IconWifi() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  )
}
function IconCoffee() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  )
}
function IconLeaf() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22c6-6 12-10 20-10-4 4-8 8-14 10z" />
      <path d="M2 22c0-8 4-16 20-22-4 8-8 14-20 22z" />
    </svg>
  )
}
function IconHeart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
function IconRecycle() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10" />
      <polyline points="23 20 23 14 17 14" />
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15" />
    </svg>
  )
}
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function IconTwitter() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  )
}

export default function CafePage() {
  return (
    <div className={styles.cafe}>

      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navInner}>
          <span className={styles.logo}>Brewed <span>Haven</span></span>
          <ul className={styles.navLinks}>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#visit" className={styles.navBtn}>Visit Us</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroTag}>Est. 2019 &nbsp;·&nbsp; Specialty Coffee</div>
          <h1>Where Every <em>Sip</em><br />Tells a Story</h1>
          <p>
            Handcrafted espresso drinks, freshly baked pastries, and a space
            designed to slow you down — right in the heart of the city.
          </p>
          <div className={styles.heroBtns}>
            <a href="#menu" className={styles.btnPrimary}>Explore Menu</a>
            <a href="#visit" className={styles.btnOutline}>Find Us</a>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <h3>5+</h3>
              <p>Years Serving</p>
            </div>
            <div className={styles.heroStat}>
              <h3>12k+</h3>
              <p>Happy Customers</p>
            </div>
            <div className={styles.heroStat}>
              <h3>4.9</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>

        {/* ANIMATED REVIEW POPUP */}
        <ReviewPopup />
      </section>

      {/* MENU */}
      <MenuSection />

      {/* ABOUT */}
      <section className={styles.sectionAlt} id="about">
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImgWrap}>
              <div className={styles.aboutYearBadge}>
                <h4>2019</h4>
                <span>Est.</span>
              </div>
              <div className={styles.aboutImgMain}>
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                  alt="Brewed Haven interior"
                />
              </div>
              <div className={styles.aboutImgAccent}>
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80"
                  alt="Coffee close-up"
                />
              </div>
            </div>
            <div className={styles.aboutText}>
              <div className={styles.sectionTag} style={{ justifyContent: 'flex-start', gap: '0' }}>
                <span>Our Story</span>
              </div>
              <h2 className={styles.sectionTitle}>More Than Just <em>Coffee</em></h2>
              <p className={styles.aboutBody}>
                Brewed Haven started as a dream between two friends who believed that
                a great cup of coffee could change the tone of anyone's day. We opened
                our doors in 2019 with one espresso machine, a handful of recipes, and
                a lot of heart.
              </p>
              <p className={styles.aboutBody}>
                Today, we serve hundreds of guests every week — students, remote workers,
                families, and first dates. Our beans are ethically sourced from farms in
                Benguet and Sagada, roasted locally to highlight each origin's character.
              </p>
              <div className={styles.aboutValues}>
                <div className={styles.aboutValue}>
                  <div className={styles.aboutValueIcon}><IconCoffee /></div>
                  <div className={styles.aboutValueText}>
                    <h5>Specialty Beans</h5>
                    <p>Single-origin, ethically sourced from local farms</p>
                  </div>
                </div>
                <div className={styles.aboutValue}>
                  <div className={styles.aboutValueIcon}><IconLeaf /></div>
                  <div className={styles.aboutValueText}>
                    <h5>Fresh Ingredients</h5>
                    <p>Locally sourced produce, baked in-house daily</p>
                  </div>
                </div>
                <div className={styles.aboutValue}>
                  <div className={styles.aboutValueIcon}><IconHeart /></div>
                  <div className={styles.aboutValueText}>
                    <h5>Community First</h5>
                    <p>A space where everyone feels welcome</p>
                  </div>
                </div>
                <div className={styles.aboutValue}>
                  <div className={styles.aboutValueIcon}><IconRecycle /></div>
                  <div className={styles.aboutValueText}>
                    <h5>Sustainable</h5>
                    <p>Eco-friendly packaging and zero food waste goal</p>
                  </div>
                </div>
              </div>
              <a href="#menu" className={styles.btnPrimary} style={{ display: 'inline-block' }}>
                See Our Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.section} id="reviews">
        <div className={styles.container}>
          <div className={styles.menuHeader}>
            <div className={styles.sectionTag}><span>Reviews</span></div>
            <h2 className={styles.sectionTitle}>What Our Guests <em>Say</em></h2>
            <p className={styles.sectionSubtitle}>
              Don&apos;t take our word for it — here&apos;s what the people who matter most have to say.
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>{'★'.repeat(t.stars)}</div>
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{t.initials}</div>
                  <div className={styles.testimonialAuthorInfo}>
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT US */}
      <section className={styles.sectionAlt} id="visit">
        <div className={styles.container}>
          <div className={styles.visitGrid}>
            <div className={styles.visitInfo}>
              <div className={styles.sectionTag} style={{ justifyContent: 'flex-start', gap: '0' }}>
                <span>Find Us</span>
              </div>
              <h2 className={styles.sectionTitle}>Come <em>Visit</em> Us</h2>
              <div className={styles.visitItem}>
                <div className={styles.visitIcon}><IconLocation /></div>
                <div className={styles.visitItemText}>
                  <h5>Address</h5>
                  <p>88 Escario Street, Brgy. Capitol Site<br />Cebu City, Philippines 6000</p>
                </div>
              </div>
              <div className={styles.visitItem}>
                <div className={styles.visitIcon}><IconClock /></div>
                <div className={styles.visitItemText}>
                  <h5>Hours</h5>
                  <p>Monday – Friday: 7:00 AM – 9:00 PM<br />Saturday – Sunday: 8:00 AM – 10:00 PM</p>
                </div>
              </div>
              <div className={styles.visitItem}>
                <div className={styles.visitIcon}><IconPhone /></div>
                <div className={styles.visitItemText}>
                  <h5>Contact</h5>
                  <p>+63 912 345 6789<br />hello@brewedhaven.ph</p>
                </div>
              </div>
              <div className={styles.visitItem}>
                <div className={styles.visitIcon}><IconWifi /></div>
                <div className={styles.visitItemText}>
                  <h5>Free Wi-Fi</h5>
                  <p>Password: brewedhaven2019<br />High-speed connection for all guests</p>
                </div>
              </div>
            </div>
            <div className={styles.visitMap}>
              <iframe
                title="Brewed Haven Café location"
                src="https://maps.google.com/maps?q=Escario+Street+Capitol+Site+Cebu+City+Philippines&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className={styles.reservationWrap}>
            <ReservationForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <span className={styles.logo}>Brewed <span>Haven</span></span>
              <p>
                A specialty café where quality coffee meets community warmth.
                Every cup we pour is made with intention, sourced with care,
                and served with a smile.
              </p>
              <div className={styles.footerSocials}>
                <a href="#" className={styles.footerSocial} aria-label="Instagram"><IconInstagram /></a>
                <a href="#" className={styles.footerSocial} aria-label="Facebook"><IconFacebook /></a>
                <a href="#" className={styles.footerSocial} aria-label="Twitter"><IconTwitter /></a>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">Our Story</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#visit">Visit Us</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Menu</h4>
              <ul>
                <li><a href="#menu">Hot Drinks</a></li>
                <li><a href="#menu">Cold Drinks</a></li>
                <li><a href="#menu">Pastries</a></li>
                <li><a href="#menu">All-Day Bites</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2024 Brewed Haven Café. All rights reserved.</p>
            <p>Built with care by <span>Xy</span></p>
          </div>
        </div>
      </footer>

    </div>
  )
}
