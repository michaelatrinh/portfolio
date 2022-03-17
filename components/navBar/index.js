import React from 'react';
import scss from './navBar.module.scss';
import Link from 'next/link';

export default function navBar(){
  return (
    <header className={scss.header}>
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
    </header>  
  )
}