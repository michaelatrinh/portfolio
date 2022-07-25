import React from 'react';
import scss from '@/components/homeHeader/main.module.scss';

export default function Header(): JSX.Element {
  return (
    <div data-scroll-section className={scss.homeWrapper}>
        <div className={scss.contentWrapper}>
          <header className={scss.header}>
            <h1 className={scss.header_title}>
              <span className="header_title_line">
                <span data-scroll data-scroll-speed="3" data-scroll-position="top">michael trinh</span>
              </span>
              <span className="header_title_line">
                <span id="front_end_developer" data-scroll data-scroll-speed="2" data-scroll-position="top">front end developer</span>
              </span>
            </h1>
            <hr className="header_hr" data-scroll data-scroll-class="header_hr_iv" data-scroll-offset="100" />
          </header>
        </div>
      </div>
  )
}