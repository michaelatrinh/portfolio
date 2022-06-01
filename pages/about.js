import React from 'react';
import scss from '@/styles/about/about.module.scss';

import NavBar from '@/components/navBar';

export default function About(){
  return (
    <main className={scss.mainCont}>
      <NavBar />
      <section className={scss.aboutWrapper}>
        {/* bg */}
        <div className={scss.bg} />
        {/* glass effect */}
        <div className={scss.glass} />
        <section className={`${scss.aboutCont} ${scss.aboutContAnimate}`}>
          <div className={scss.aboutContentWrapper}>
            <div className={scss.aboutContentWrapperLeft}>
              {/* headshot photo */}
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