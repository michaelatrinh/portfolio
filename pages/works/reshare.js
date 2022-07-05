import React, { useRef } from 'react';
import scss from '@/styles/works/reshare.module.scss';

// components
import NavBar from '@/components/navBar';
import ReshareTitle from '@/components/projectTitles/reshareTitle';
import ScrollToView from '@/components/scrollToView';
import {BsFillArrowRightSquareFill} from 'react-icons/bs';

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
          <div className={scss.contentContainerWrapper}>
            <div className={scss.contentContainerWrapperLeft}>
              <img src='/reshare/screens.png' alt='Reshare Demo' className={scss.reshareScreens}/>
            </div>

            <div className={scss.contentContainerWrapperRight}>
              {/* reshare title */}
              <h1 className={scss.contentContainerWrapperRightTitle}>Reshare</h1>
              {/* subtitle */}
              <h2 className={scss.contentContainerWrapperRightSubtitle}>Mobile Application</h2>
              {/* info */}
              <p className={scss.contentContainerWrapperRightPara}>
                A school mobile application project that serves as a marketplace to resolve and reduce the amount of food waste caused by grocery stores in the metro Vancouver region.
                <br/>
                <br/>
                Built with tools: <br/>
                <p 
                  onClick={() => window.open("https://expo.dev/", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • Expo {"(React Native)"}
                </p>
                <p 
                  onClick={() => window.open("https://reactnavigation.org/", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • React Navigation
                </p>
                <p 
                  onClick={() => window.open("https://axios-http.com/", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • Axios {"(Node.js & RESTful API)"}
                </p>
                <p 
                  onClick={() => window.open("https://firebase.google.com/", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • Google Firebase {"(Cloud Database & RESTful API)"}
                </p>
                <p 
                  onClick={() => window.open("https://babeljs.io/", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • Babel.js {"(JavaScript Compiler)"}
                </p>
                <p 
                  onClick={() => window.open("https://styled-components.com/", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • Styled-Components {"(CSS)"}
                </p>
              </p>

              <h3
                onClick={() => window.open("https://github.com/michaelatrinh/reshareApp", '_blank', 'noopener noreferrer')}
                className={scss.contentContainerWrapperRightGithubLink}
              >
                <BsFillArrowRightSquareFill /> &nbsp; View GitHub Repository
              </h3>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}