import React from 'react';
import scss from '@/components/homeHeader/main.module.scss';

export default function Header(): JSX.Element {
  return (
    <div data-scroll-section className={scss.homeWrapper}>
        <div className={scss.contentWrapper}>
          <header className={scss.header}>
            <h1 className={scss.header_title}>
              <span 
                className={scss.header_title_line} 
                data-scroll-class={scss.header_title_line_iv} 
                data-scroll 
                data-scroll-speed="3"
                data-scroll-position="top"
              >
                <span className={scss.header_title_line_text}>
                  Michael Trinh
                </span>
              </span>

              <span 
                className={scss.header_title_line}
                data-scroll-class={scss.header_title_line_iv}
                data-scroll
                data-scroll-speed="2"
                data-scroll-position="top"
              >
                <span id={scss.frontEndDev} className={scss.header_title_line_text}>
                  front end developer
                </span>
              </span>
            </h1>
            <hr 
              className={scss.header_hr} 
              data-scroll-class={scss.header_hr_iv}
              data-scroll
              data-scroll-offset="100" 
            />
          </header>
        </div>
      </div>
  )
}