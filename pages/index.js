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
import {IoIosWarning} from 'react-icons/io';

export default function Home() {
  const worksSectionRef = useRef();

  const handleScrollDownClick = () => {
    worksSectionRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <main className={scss.mainCont}>


      <div className={scss.wipMessage}>
        <h1 className={scss.wipMessageMsg}><IoIosWarning />WORK IN PROGRESS WEBSITE<IoIosWarning /></h1>
      </div>


      {/* home */}
      <section className={scss.homeWrapper}>
        {/* expanding bar when webpage loads */}
        <div className={scss.expandBarCont}>
          <ExpandingContentBar />
        </div>
        {/* bg */}
        <div className={scss.bg} />
        {/* glass effect */}
        <div className={scss.glass} />
        {/* home content */}
        <section className={`${scss.contentCont} ${scss.contentContAnimate}`}>
          {/* nav bar */}
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
        {/* bg */}
        <div className={scss.bg} />
        {/* glass effect */}
        <div className={scss.glass} />
        <section className={`${scss.worksCont} ${scss.worksContAnimate}`} ref={worksSectionRef}>
          <div className={scss.worksTitle}>
            <WorksTitle />
          </div>
          {/* <WorksSwiper /> */}
          <WorksCarousel />
        </section>
      </section>
      {/* about */}
      <section className={scss.aboutWrapper}>
        {/* bg */}
        <div className={scss.bg} />
        {/* glass effect */}
        <div className={scss.glass} />
        <section className={`${scss.aboutCont} ${scss.aboutContAnimate}`} ref={worksSectionRef}>
          <div className={scss.aboutContentWrapper}>
            <div className={scss.aboutContentWrapperLeft}>
              <img src='headshot.png' alt='Headshot Photo' className={scss.headshot} />
              <div className={scss.aboutContentWrapperLeftSocialsWrapper}>
                {/* <a target="_blank" href="https://icons8.com/icon/8808/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                <img 
                  src='icons8-linkedin.svg' 
                  alt='LinkedIn' 
                  className={scss.socialIcons} 
                  onClick={() => window.open("https://www.linkedin.com/in/michaelatrinh/", '_blank')}  
                />

                {/* <a target="_blank" href="https://icons8.com/icon/62856/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                <img 
                  src='icons8-github.svg' 
                  alt='GitHub' 
                  className={scss.socialIcons} 
                  onClick={() => window.open("https://github.com/michaelatrinh", '_blank', 'noopener noreferrer')}
                />

                {/* <a target="_blank" href="https://icons8.com/icon/YRRhCXfA0Vd0/mail">Mail</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                <img 
                  src='icons8-mail.svg' 
                  alt='eMail' 
                  className={scss.socialIcons} 
                  onClick={(e) => {
                    window.location.href = "mailto:trinh.michael98@gmail.com";
                    e.preventDefault();
                  }}
                />
              </div>
            </div>
            <div className={scss.aboutContentWrapperRight}>
              <h1 className={scss.aboutContentWrapperRightTitle}>Michael Trinh</h1>
              <h2 className={scss.aboutContentWrapperRightSubtitle}>Front End Developer</h2>
              <p className={scss.aboutContentWrapperRightPara}>
                {"Hi, I'm Michael, and I'm a front end developer with experience in UI & UX design. I'm primarily trained and experienced in front end development and languages like:"}
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
