import React from 'react';
import scss from './navBar.module.scss';
import Link from 'next/link';

export default function navBar({
  navSkills = () => {},
  navWorks = () => {},
  navContact = () => {}
}){
  return (
      <nav className={scss.nav}>
        <div className={scss.homeWrapper}>
          <div>
            <Link href="/">
                <a>
                  <img src='mtrinh_white.svg' alt='Home' />
                </a>
            </Link>
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