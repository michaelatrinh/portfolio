import React from 'react'
import Link from 'next/link';
import styles from '@/styles/home.module.css';

// components
import ExpandingContentBar from '@/components/expandingBar'

export default function Home() {
  return (
    <main>
      {/* expanding bar when webpage loads */}
      <div className={styles.expandBarCont}>
        <ExpandingContentBar />
      </div>
      {/* welcome homepage msg & nav bar */}
      <section className={`${styles.contentCont} ${styles.contentContAnimate}`}>
        {/* nav bar */}
        <header className={styles.header}>
          <nav className={styles.navColumn}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/works">
              <a>Works</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </nav>
        </header>  
        {/* welcome msg */}
        <div className={styles.welcomeCont}>
          <h1>Hi, I'm Michael</h1>
          <h2>Front end developer</h2>
        </div>
      </section>
      <section className={styles.realContentCont}>
  
      </section>
    
    </main>
  )
}
