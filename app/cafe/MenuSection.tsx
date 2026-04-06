'use client'

import { useState } from 'react'
import styles from './page.module.css'

const menuItems = [
  {
    name: 'Signature Espresso',
    description: 'Double shot of our house-blend espresso with a velvety crema. Bold, smooth, and deeply satisfying.',
    price: 120,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80',
  },
  {
    name: 'Caramel Cloud Latte',
    description: 'Silky oat milk latte topped with house-made caramel foam and a hint of sea salt.',
    price: 165,
    badge: 'Fan Favorite',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
  },
  {
    name: 'Matcha Mist',
    description: 'Ceremonial-grade matcha whisked with steamed milk and a touch of honey. Earthy and refreshing.',
    price: 155,
    badge: null,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80',
  },
  {
    name: 'Butter Croissant',
    description: 'Freshly baked every morning. Layers of flaky, buttery pastry with a golden, crisp exterior.',
    price: 95,
    badge: 'Fresh Daily',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
  },
  {
    name: 'Avocado Toast',
    description: 'Sourdough toast, smashed avocado, cherry tomatoes, microgreens, and a drizzle of chili oil.',
    price: 220,
    badge: null,
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80',
  },
  {
    name: 'Classic Americano',
    description: 'Two shots of espresso diluted with hot water. Clean, rich, and effortlessly balanced.',
    price: 110,
    badge: null,
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80',
  },
]

type CartItem = { name: string; price: number; qty: number }
type Toast = { id: number; name: string }

export default function MenuSection() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [toasts, setToasts] = useState<Toast[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const totalItems = cart.reduce((s, i) => s + i.qty, 0)
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0)

  function addToCart(item: typeof menuItems[0]) {
    setCart(prev => {
      const exists = prev.find(c => c.name === item.name)
      if (exists) return prev.map(c => c.name === item.name ? { ...c, qty: c.qty + 1 } : c)
      return [...prev, { name: item.name, price: item.price, qty: 1 }]
    })
    const id = Date.now()
    setToasts(prev => [...prev, { id, name: item.name }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 2800)
  }

  function removeFromCart(name: string) {
    setCart(prev => prev.filter(c => c.name !== name))
  }

  function updateQty(name: string, delta: number) {
    setCart(prev => prev
      .map(c => c.name === name ? { ...c, qty: c.qty + delta } : c)
      .filter(c => c.qty > 0)
    )
  }

  return (
    <section className={styles.section} id="menu">
      <div className={styles.container}>
        <div className={styles.menuHeader}>
          <div className={styles.sectionTag}><span>Our Menu</span></div>
          <h2 className={styles.sectionTitle}>Crafted with <em>Care</em></h2>
          <p className={styles.sectionSubtitle}>
            Every item on our menu is made fresh to order using locally sourced
            ingredients and specialty-grade coffee beans.
          </p>
        </div>
        <div className={styles.menuGrid}>
          {menuItems.map((item, i) => (
            <div key={i} className={styles.menuCard}>
              <div className={styles.menuCardImg}>
                <img src={item.image} alt={item.name} />
                {item.badge && <span className={styles.menuBadge}>{item.badge}</span>}
              </div>
              <div className={styles.menuCardBody}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className={styles.menuCardFooter}>
                  <span className={styles.menuPrice}>₱{item.price}</span>
                  <button
                    className={styles.menuAddBtn}
                    aria-label={`Add ${item.name} to order`}
                    onClick={() => addToCart(item)}
                  >+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CART BUTTON */}
      {totalItems > 0 && (
        <button className={styles.cartFab} onClick={() => setCartOpen(true)} aria-label="View cart">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span className={styles.cartBadge}>{totalItems}</span>
          <span className={styles.cartLabel}>View Order · ₱{totalPrice}</span>
        </button>
      )}

      {/* CART DRAWER */}
      {cartOpen && (
        <div className={styles.cartOverlay} onClick={() => setCartOpen(false)}>
          <div className={styles.cartDrawer} onClick={e => e.stopPropagation()}>
            <div className={styles.cartHeader}>
              <h3>Your Order</h3>
              <button className={styles.cartClose} onClick={() => setCartOpen(false)}>✕</button>
            </div>
            <div className={styles.cartItems}>
              {cart.map(item => (
                <div key={item.name} className={styles.cartItem}>
                  <div className={styles.cartItemInfo}>
                    <span className={styles.cartItemName}>{item.name}</span>
                    <span className={styles.cartItemPrice}>₱{item.price * item.qty}</span>
                  </div>
                  <div className={styles.cartItemQty}>
                    <button onClick={() => updateQty(item.name, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.name, 1)}>+</button>
                    <button className={styles.cartItemRemove} onClick={() => removeFromCart(item.name)}>✕</button>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cartFooter}>
              <div className={styles.cartTotal}>
                <span>Total</span>
                <span>₱{totalPrice}</span>
              </div>
              <button className={styles.cartCheckout} onClick={() => {
                setCartOpen(false)
                setCart([])
                const id = Date.now()
                setToasts(prev => [...prev, { id, name: '🎉 Order placed! We\'ll have it ready shortly.' }])
                setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000)
              }}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD-TO-CART TOASTS */}
      <div className={styles.toastStack}>
        {toasts.map(t => (
          <div key={t.id} className={styles.toast}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>Added — <strong>{t.name}</strong></span>
          </div>
        ))}
      </div>
    </section>
  )
}
