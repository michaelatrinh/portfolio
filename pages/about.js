import React from 'react';
import scss from '@/styles/about/about.module.scss';

import NavBar from '@/components/navBar';

export default function About(){
  return (
    <main className={scss.mainCont}>
      <NavBar />
      <section className={scss.worksWrapper}>
        {/* bg */}
        <div className={scss.bg} />
        {/* glass effect */}
        <div className={scss.glass} />
        <section className={`${scss.worksCont} ${scss.worksContAnimate}`}>
          <div className={scss.aboutContentWrapper}>
            <div className={scss.aboutContentWrapperLeft}>
              <img src='headshot.png' alt='Headshot Photo' className={scss.headshot} />
            </div>
            <div className={scss.aboutContentWrapperRight}>
              <h1 className={scss.aboutContentWrapperRightTitle}>Michael Trinh</h1>
              <h2 className={scss.aboutContentWrapperRightSubtitle}>Front End Developer</h2>
              <p className={scss.aboutContentWrapperRightPara}>
                Hi, I'm Michael, and I'm a front end developer with experience in UI & UX design. I'm primarily trained and experienced in front end development and languages like:
                <br />
                <br />
                • Mobile and web app development, <br />
                • Digital asset design and integration, <br />
                • Interface design, <br />
                • React & React Native, <br />
                • JavaScript & JQuery, <br />
                • Node.js, <br />
                • HTML & CSS, <br />
                • Styled-Components & Sass <br />
                <br />
                and entry level knowledge of back end development and technologies like:
                <br />
                <br />
                • Network administration, <br /> 
                • Software systems security, <br />
                • Software quality assurance, <br />
                • Computer hardware, <br />
                • MongoDB, <br />
                • PHP, <br />
                • MySQL
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}