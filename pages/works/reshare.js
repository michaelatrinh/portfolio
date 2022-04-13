import React, { useRef } from 'react';
import scss from '@/styles/works/reshare.module.scss';

// components
import NavBar from '@/components/navBar';
import ReshareTitle from '@/components/projectTitles/reshareTitle';
import ScrollToView from '@/components/scrollToView';

export default function Reshare(){
  const secondSectionRef = useRef();

  const handleScrollDownClick = () => {
    secondSectionRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <main>
      <section className={scss.firstWrapper}>
        {/* bg */}
        <div className={scss.bg} />
        {/* glass effect */}
        <div className={scss.glass} />

        {/* actual reshare content */}
        <section className={scss.contentContainer}>
          {/* nav */}
          <NavBar />
          {/* central title and subtitle */}
          <div className={scss.pageTitleAndSub}>
            {/* reshare title */}
            <ReshareTitle />
            {/* subtitle */}
            <h2>A school mobile application project that serves as a marketplace to resolve and reduce the amount of food waste caused by grocery stores in the metro Vancouver region.</h2>
          </div>
          {/* scroll icon */}
          <div className={scss.scrollIcon}>
            <ScrollToView onScrollDownClick={handleScrollDownClick} />
          </div>
        </section>
      </section>

      {/* second content */}
      <section className={scss.secondWrapper} ref={secondSectionRef}>
        {/* bg */}
        <div className={scss.bg} />
        {/* glass effect */}
        <div className={scss.glass} />
        
      </section>
    </main>
  )
}