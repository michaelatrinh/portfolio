import React from 'react'
import Link from 'next/link';
import css from '@/styles/home/home.module.css';
import scss from '@/styles/home/home.module.scss';

// components
import ExpandingContentBar from '@/components/expandingBar';
import WelcomeMsg from '@/components/welcomeMsg';

export default function Home() {
  return (
    <main>
      {/* expanding bar when webpage loads */}
      <div className={css.expandBarCont}>
        <ExpandingContentBar />
      </div>
      {/* welcome homepage msg & nav bar */}
      <section className={`${css.contentCont} ${css.contentContAnimate}`}>
        {/* nav bar */}
        <header className={css.header}>
          <nav className={css.navColumn}>
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
        <WelcomeMsg />
      </section>
      <section className={css.realContentCont}>
  
      </section>
    
    </main>
  )
}
