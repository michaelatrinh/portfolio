import React, { useRef } from 'react'
import Link from 'next/link';
import scss from '@/styles/home/home.module.scss';

// components
import NavBar from '@/components/navBar';
import ExpandingContentBar from '@/components/expandingBar';
import WelcomeMsg from '@/components/welcomeMsg';
import ScrollToView from '@/components/scrollToView';
import WorksTitle from '@/components/worksTitle';
import WorksSwiper from '@/components/worksSwiper';
import WorksCarousel from '@/components/worksCarousel';

export default function Home() {
  const worksSectionRef = useRef();

  const handleScrollDownClick = () => {
    worksSectionRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <main>
      {/* home */}
      <section className={scss.homeWrapper}>
        {/* expanding bar when webpage loads */}
        <div className={scss.expandBarCont}>
          <ExpandingContentBar />
        </div>
        <section className={`${scss.contentCont} ${scss.contentContAnimate}`}>
          {/* nav bar */}
          {/* <header className={scss.header}>
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
          </header>   */}
          <NavBar />
          {/* welcome msg */}
          <WelcomeMsg />
          <div className={scss.scrollIcon}>
            <ScrollToView onScrollDownClick={handleScrollDownClick}/>
          </div>
        </section>
      </section>
      {/* works */}
      <section className={scss.worksWrapper}>
        <section className={`${scss.worksCont} ${scss.worksContAnimate}`} ref={worksSectionRef}>
          <div className={scss.worksTitle}>
            <WorksTitle />
          </div>
          {/* <WorksSwiper /> */}
          <WorksCarousel />
        </section>
      </section>
    </main>
  )
}
