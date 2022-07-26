import React from 'react';
import scss from '@/components/contact/main.module.scss';

export default function Contact(): JSX.Element {
  return (
    <section className={scss.contactWrapper} data-scroll-section>
      <div className={scss.contentWrapper}>
        <div className={scss.leftWrapper}>
          <h2>
            <span
              data-scroll-class={scss.footer_line}
              data-scroll
            >
              <span>Consider Reaching Out To Me!</span>
            </span>
          </h2>
        </div>
        <div className={scss.rightWrapper}>
          <div className={scss.rightWrapper_socialWrapper}>
            <ul>
              <li>
                <img 
                  src='/socialsIcons/icons8-linkedin.svg' 
                  alt='LinkedIn' 
                  className={scss.socialIcons} 
                  onClick={() => window.open("https://www.linkedin.com/in/michaelatrinh/", '_blank')}  
                />
              </li>
              <li>
                <img 
                  src='/socialsIcons/icons8-github.svg' 
                  alt='GitHub' 
                  className={scss.socialIcons} 
                  onClick={() => window.open("https://github.com/michaelatrinh", '_blank', 'noopener noreferrer')}
                />
              </li>
              <li>
                <img 
                  src='/socialsIcons/icons8-mail.svg' 
                  alt='eMail' 
                  className={scss.socialIcons} 
                  onClick={(e) => {
                    window.location.href = "mailto:trinh.michael98@gmail.com";
                    e.preventDefault();
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
