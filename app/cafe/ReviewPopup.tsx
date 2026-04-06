'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

const reviews = [
  {
    initials: 'AC',
    name: 'Anna Cruz',
    role: 'Google Review',
    stars: 5,
    text: 'Best coffee I\'ve had in Cebu — absolutely bar none.',
    color: '#e8472b',
  },
  {
    initials: 'MR',
    name: 'Miguel Reyes',
    role: 'Yelp Review',
    stars: 5,
    text: 'My go-to remote work spot. Perfect vibe every single day.',
    color: '#d93025',
  },
  {
    initials: 'SL',
    name: 'Sofia Lim',
    role: 'Google Review',
    stars: 5,
    text: 'Latte art was stunning. Worth every peso.',
    color: '#1a73e8',
  },
  {
    initials: 'JD',
    name: 'James Dela Cruz',
    role: 'Facebook Review',
    stars: 5,
    text: 'Staff remembers your name and your order. That\'s rare.',
    color: '#1877f2',
  },
]

export default function ReviewPopup() {
  const [current, setCurrent] = useState(0)
  const [phase, setPhase] = useState<'entering' | 'visible' | 'leaving' | 'hidden'>('hidden')

  useEffect(() => {
    // Initial delay before first popup
    const initTimer = setTimeout(() => setPhase('entering'), 1200)
    return () => clearTimeout(initTimer)
  }, [])

  useEffect(() => {
    if (phase === 'hidden') return

    let timer: ReturnType<typeof setTimeout>

    if (phase === 'entering') {
      // After slide-in animation (400ms), stay visible
      timer = setTimeout(() => setPhase('visible'), 400)
    } else if (phase === 'visible') {
      // Stay visible for 3.5 seconds then leave
      timer = setTimeout(() => setPhase('leaving'), 3500)
    } else if (phase === 'leaving') {
      // After slide-out (400ms), wait briefly then show next
      timer = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % reviews.length)
        setPhase('entering')
      }, 800)
    }

    return () => clearTimeout(timer)
  }, [phase])

  const review = reviews[current]

  const popupClass = [
    styles.reviewPopup,
    phase === 'entering' ? styles.reviewPopupEnter : '',
    phase === 'visible' ? styles.reviewPopupVisible : '',
    phase === 'leaving' ? styles.reviewPopupLeave : '',
    phase === 'hidden' ? styles.reviewPopupHidden : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={popupClass} aria-live="polite">
      <div className={styles.rpAvatar} style={{ background: review.color }}>
        {review.initials}
      </div>
      <div className={styles.rpContent}>
        <div className={styles.rpHeader}>
          <span className={styles.rpName}>{review.name}</span>
          <span className={styles.rpSource}>{review.role}</span>
        </div>
        <div className={styles.rpStars}>
          {'★'.repeat(review.stars)}
        </div>
        <p className={styles.rpText}>{review.text}</p>
      </div>
    </div>
  )
}
