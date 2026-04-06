'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function ReservationForm() {
  const [form, setForm] = useState({ name: '', date: '', time: '', guests: '2', note: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.reservationSuccess}>
        <div className={styles.successIcon}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h4>Reservation Confirmed!</h4>
        <p>Thank you, <strong>{form.name}</strong>. We have reserved a table for <strong>{form.guests} guest{parseInt(form.guests) > 1 ? 's' : ''}</strong> on <strong>{form.date}</strong> at <strong>{form.time}</strong>.</p>
        <p>A confirmation will be sent to you shortly. We look forward to seeing you at Brewed Haven.</p>
        <button className={styles.reservationReset} onClick={() => { setSubmitted(false); setForm({ name: '', date: '', time: '', guests: '2', note: '' }) }}>
          Make another reservation
        </button>
      </div>
    )
  }

  return (
    <form className={styles.reservationForm} onSubmit={handleSubmit}>
      <h3 className={styles.reservationTitle}>Reserve a Table</h3>
      <p className={styles.reservationSub}>Book your spot in advance — walk-ins are always welcome too.</p>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="res-name">Full Name</label>
          <input id="res-name" name="name" type="text" placeholder="e.g. Anna Cruz" value={form.name} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="res-guests">Party Size</label>
          <select id="res-guests" name="guests" value={form.guests} onChange={handleChange}>
            {['1','2','3','4','5','6','7','8'].map(n => (
              <option key={n} value={n}>{n} {parseInt(n) === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="res-date">Date</label>
          <input id="res-date" name="date" type="date" value={form.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="res-time">Preferred Time</label>
          <select id="res-time" name="time" value={form.time} onChange={handleChange} required>
            <option value="">Select a time</option>
            {['7:00 AM','7:30 AM','8:00 AM','8:30 AM','9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM'].map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="res-note">Special Requests <span>(optional)</span></label>
        <textarea id="res-note" name="note" placeholder="Allergies, occasion, seating preference..." value={form.note} onChange={handleChange} rows={3} />
      </div>
      <button type="submit" className={styles.reservationBtn}>Confirm Reservation</button>
    </form>
  )
}
