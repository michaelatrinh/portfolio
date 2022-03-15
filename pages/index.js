import React, { useRef } from 'react'
import Link from 'next/link';
import css from '@/styles/home/home.module.css';
import scss from '@/styles/home/home.module.scss';

// components
import ExpandingContentBar from '@/components/expandingBar';
import WelcomeMsg from '@/components/welcomeMsg';
import ScrollToView from '@/components/scrollToView';

export default function Home() {
  const worksSectionRef = useRef();

  const handleScrollDownClick = () => {
    worksSectionRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

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
          <div className={scss.scrollIcon}>
            <ScrollToView onScrollDownClick={handleScrollDownClick}/>
          </div>
        </section>
      </div>
      {/* works */}
      <section className={scss.worksCont} ref={worksSectionRef}>
        
      </section>
    </main>
  )
}
