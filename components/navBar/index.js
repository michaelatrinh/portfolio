import React from 'react';
import scss from './navBar.module.scss';
import Link from 'next/link';

export default function navBar({
  navWorks = () => {}
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
            <a onClick={navWorks}>Works</a>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </nav>
  )
}