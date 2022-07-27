import React, { forwardRef } from 'react';
import scss from '@/components/homeSkills/main.module.scss';

const Skills = forwardRef<HTMLElement>((props, ref) => (
  <section 
    className={scss.skillsWrapper}
    ref={ref}
    data-scroll-section 
  >
    <div className={scss.contentWrapper}>
      <div 
        style={{ position: "relative" }}
        data-scroll
        data-scroll-speed="0.5"
        // data-scroll-position="bottom"
      >
        <h2>Skills</h2>
        <details>
          <summary 
            className={scss.li_title} 
            data-scroll-class={scss.li_title_iv} 
            data-scroll 
            data-scroll-repeat={true} 
            data-scroll-offset="45%, 55%"
          >
            Web Development
          </summary>
          <ul>
            <li>
              <span 
                className={scss.li_sub}
                data-scroll-class={scss.li_sub_iv} 
                data-scroll 
                data-scroll-repeat={true} 
                data-scroll-offset="45%, 55%"
              >
                HTML / CSS
              </span>
            </li>
            <li>
              <span 
                className={scss.li_sub} 
                data-scroll-class={scss.li_sub_iv} 
                data-scroll data-scroll-repeat={true} 
                data-scroll-offset="45%, 55%"
              >
                JavaScript
              </span>
            </li>
            <li>
              <span 
                className={scss.li_sub} 
                data-scroll-class={scss.li_sub_iv} 
                data-scroll data-scroll-repeat={true} 
                data-scroll-offset="45%, 55%"
              >
                TypeScript
              </span>
            </li>
            <li>
              <span 
                className={scss.li_sub} 
                data-scroll-class={scss.li_sub_iv} 
                data-scroll 
                data-scroll-repeat={true} 
                data-scroll-offset="45%, 55%"
              >
                React.js
              </span>
            </li>
          </ul>
        </details>

        <details>
          <summary 
            className={scss.li_title} 
            data-scroll-class={scss.li_title_iv} 
            data-scroll 
            data-scroll-repeat={true} 
            data-scroll-offset="45%, 55%"
          >
            Mobile App Development
          </summary>
          <ul>
            <li>
              <span 
                className={scss.li_sub} 
                data-scroll-class={scss.li_sub_iv} 
                data-scroll 
                data-scroll-repeat={true} 
                data-scroll-offset="45%, 55%"
              >
                React Native
              </span>
            </li>
          </ul>
        </details>
        
        <details>
          <summary 
            className={scss.li_title} 
            data-scroll-class={scss.li_title_iv} 
            data-scroll 
            data-scroll-repeat={true} 
            data-scroll-offset="45%, 55%"
          >
            Database Management / Handling
          </summary>
          <ul>
            <li>
              <span 
                className={scss.li_sub} 
                data-scroll-class={scss.li_sub_iv} 
                data-scroll 
                data-scroll-repeat={true} 
                data-scroll-offset="45%, 55%"
              >
                Firebase / Firestore
              </span>
            </li>
            <li>
              <span 
                className={scss.li_sub} 
                data-scroll-class={scss.li_sub_iv} 
                data-scroll 
                data-scroll-repeat={true} 
                data-scroll-offset="45%, 55%"
              >
                MySQL
              </span>
            </li>
            <li>
              <span 
                className={scss.li_sub} 
                data-scroll-class={scss.li_sub_iv} 
                data-scroll 
                data-scroll-repeat={true} 
                data-scroll-offset="45%, 55%"
              >
                MongoDB
              </span>
            </li>
            <li>
              <span 
                className={scss.li_sub} 
                data-scroll-class={scss.li_sub_iv} 
                data-scroll 
                data-scroll-repeat={true} 
                data-scroll-offset="45%, 55%"
              >
                Node.js
              </span>
            </li>
          </ul>
        </details>
        
        <details>
          <summary 
            className={scss.li_title} 
            data-scroll-class={scss.li_title_iv} 
            data-scroll 
            data-scroll-repeat={true} 
            data-scroll-offset="45%, 55%"
          >
            UI / UX Design
          </summary>
          <ul>
            <li>
              <span 
                className={scss.li_sub} 
                data-scroll-class={scss.li_sub_iv} 
                data-scroll 
                data-scroll-repeat={true} 
                data-scroll-offset="45%, 55%"
              >
                Figma
              </span>
            </li>
          </ul>
        </details>

        <div className={scss.spacingDiv}></div>
        <hr 
          className={scss.header_hr} 
          data-scroll-class={scss.header_hr_iv}
          data-scroll
          data-scroll-offset="100" 
        />

      </div>
    </div>
  </section>
));

Skills.displayName = "Skills";

export default Skills;