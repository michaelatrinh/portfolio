import React, { useRef } from 'react';
import scss from '@/styles/works/cinemagic.module.scss';

// components
import NavBar from '@/components/navBar';
import ScrollToView from '@/components/scrollToView';
import {BsFillArrowRightSquareFill} from 'react-icons/bs';

export default function Cinemagic(){
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

        {/* actual cinemagic content */}
        <section className={scss.contentContainer}>
          {/* nav */}
          <NavBar />
          {/* central title and subtitle */}
          <div className={scss.contentContainerWrapper}>
            <div className={scss.contentContainerWrapperLeft}>
              <img src='/cinemagic/screens.png' alt='Cinemagic Demo' className={scss.cinemagicScreens}/>
            </div>

            <div className={scss.contentContainerWrapperRight}>
              {/* cinemagic title */}
              <h1 className={scss.contentContainerWrapperRightTitle}>Cinemagic</h1>
              {/* subtitle */}
              <h2 className={scss.contentContainerWrapperRightSubtitle}>Web & Mobile Application</h2>
              {/* info */}
              <p className={scss.contentContainerWrapperRightPara}>
                A school web application project that provides users with movie recommendations based on data collected from IMDB.
                <br/>
                <br/>
                Built with tools: <br/>
                <p 
                  onClick={() => window.open("https://nextjs.org/", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • Next.js {"(React.js)"}
                </p>
                <p 
                  onClick={() => window.open("https://react-bootstrap.github.io/", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • React Bootstrap
                </p>
                <p 
                  onClick={() => window.open("https://react-dnd.github.io/react-dnd/about", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • React DnD
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
                  onClick={() => window.open("https://socket.io/", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • Socket.IO {"(Client-Server Communication)"}
                </p>
                <p 
                  onClick={() => window.open("https://sass-lang.com/", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • SASS
                </p>
                <p 
                  onClick={() => window.open("https://styled-components.com/", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • Styled-Components {"(CSS)"}
                </p>
                <p 
                  onClick={() => window.open("https://www.uuidgenerator.net/dev-corner/javascript", '_blank', 'noopener noreferrer')}
                  className={scss.contentContainerWrapperRightParaLink}
                >
                  • UUID Generator
                </p>
              </p>

              <h3
                onClick={() => window.open("https://github.com/danielfubcit/cinemagic", '_blank', 'noopener noreferrer')}
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