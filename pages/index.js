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
      <div className={scss.homeWrapper}>
        {/* expanding bar when webpage loads */}
        <div className={scss.expandBarCont}>
          <ExpandingContentBar />
        </div>

        <section className={`${scss.contentCont} ${scss.contentContAnimate}`}>
          {/* nav bar */}
          <header className={scss.header}>
            <nav>
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
      </div>
      {/* welcome homepage msg & nav bar */}
      
      {/* works */}
      <section className={scss.worksCont}>
        
      </section>
    </main>
  )
}
