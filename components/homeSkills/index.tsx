import React from 'react';
import scss from '@/components/homeSkills/main.module.scss';

export default function Skills(): JSX.Element {
  return (
    <section data-scroll-section className={scss.skillsWrapper}>
      <div className={scss.contentWrapper}>
        <h2>Skills</h2>
        <details>
          <summary className={scss.li_title} data-scroll-class={scss.li_title_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
            Web Development
          </summary>
          <ul>
            <li>
              <span className={scss.li_sub} data-scroll-class={scss.li_sub_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
                HTML / CSS
              </span>
            </li>
            <li>
              <span className={scss.li_sub} data-scroll-class={scss.li_sub_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
                JavaScript
              </span>
            </li>
            <li>
              <span className={scss.li_sub} data-scroll-class={scss.li_sub_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
                TypeScript
              </span>
            </li>
            <li>
              <span className={scss.li_sub} data-scroll-class={scss.li_sub_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
                React.js
              </span>
            </li>
          </ul>
        </details>

        <details>
          <summary className={scss.li_title} data-scroll-class={scss.li_title_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
            Mobile App Development
          </summary>
          <ul>
            <li>
              <span className={scss.li_sub} data-scroll-class={scss.li_sub_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
                React Native
              </span>
            </li>
          </ul>
        </details>
        
        <details>
          <summary className={scss.li_title} data-scroll-class={scss.li_title_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
            Database Management / Handling
          </summary>
          <ul>
            <li>
              <span className={scss.li_sub} data-scroll-class={scss.li_sub_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
                Firebase / Firestore
              </span>
            </li>
            <li>
              <span className={scss.li_sub} data-scroll-class={scss.li_sub_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
                MySQL
              </span>
            </li>
            <li>
              <span className={scss.li_sub} data-scroll-class={scss.li_sub_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
                MongoDB
              </span>
            </li>
            <li>
              <span className={scss.li_sub} data-scroll-class={scss.li_sub_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
                Node.js
              </span>
            </li>
          </ul>
        </details>
        
        <details>
          <summary className={scss.li_title} data-scroll-class={scss.li_title_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
            UI / UX Design
          </summary>
          <ul>
            <li>
              <span className={scss.li_sub} data-scroll-class={scss.li_sub_iv} data-scroll data-scroll-repeat={true} data-scroll-offset="55%, 45%">
                Figma
              </span>
            </li>
          </ul>
        </details>
      </div>
    </section>
  )
}