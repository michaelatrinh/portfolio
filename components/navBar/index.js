import React from 'react';
import scss from './navBar.module.scss';

export default function navBar({
  navHome = () => {},
  navSkills = () => {},
  navWorks = () => {},
  navContact = () => {}
}){
  return (
      <nav className={scss.nav}>
        <div className={scss.homeWrapper}>
          <div>
            <a onClick={navHome}>
              <img src='mtrinh_white.svg' alt='Home' />
            </a>
          </div>
        </div>

        <div className={scss.linksWrapper}>
          <div>
            <a onClick={navSkills}>Skills</a>
            <a onClick={navWorks}>Works</a>
            <a onClick={navContact}>Contact</a>
          </div>
        </div>
      </nav>
  )
}