import React, { useEffect } from 'react';
import css from '@/components/welcomeMsg/style.module.css';

export default function welcomeMsg(){
  return (
    <div className={css.welcomeCont}>
      {/* <h1>Hi, I'm Michael</h1> */}
      <h1 aria-label='Text'>
        <span aria-hidden="true">H</span>
        <span aria-hidden="true">i</span>
        <span aria-hidden="true">,</span>
        <span dangerouslySetInnerHTML={{__html: "&nbsp"}} />
        <span aria-hidden="true">I</span>
        {/* <span aria-hidden="true">'</span> */}
        <span dangerouslySetInnerHTML={{__html: "&#39"}} />
        <span aria-hidden="true">m</span>
        <span dangerouslySetInnerHTML={{__html: "&nbsp"}} />
        <span aria-hidden="true">M</span>
        <span aria-hidden="true">i</span>
        <span aria-hidden="true">c</span>
        <span aria-hidden="true">h</span>
        <span aria-hidden="true">a</span>
        <span aria-hidden="true">e</span>
        <span aria-hidden="true">l</span>
      </h1>
      <h2 aria-label='Text'>
        <span aria-hidden="true">F</span>
        <span aria-hidden="true">r</span>
        <span aria-hidden="true">o</span>
        <span aria-hidden="true">n</span>
        <span aria-hidden="true">t</span>
        <span dangerouslySetInnerHTML={{__html: "&nbsp"}} />
        <span aria-hidden="true">e</span>
        <span aria-hidden="true">n</span>
        <span aria-hidden="true">d</span>
        <span dangerouslySetInnerHTML={{__html: "&nbsp"}} />
        <span aria-hidden="true">d</span>
        <span aria-hidden="true">e</span>
        <span aria-hidden="true">v</span>
        <span aria-hidden="true">e</span>
        <span aria-hidden="true">l</span>
        <span aria-hidden="true">o</span>
        <span aria-hidden="true">p</span>
        <span aria-hidden="true">e</span>
        <span aria-hidden="true">r</span>
        <span aria-hidden="true" id={css.period}>.</span>
      </h2>
    </div>
  )
}