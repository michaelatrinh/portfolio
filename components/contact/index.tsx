import React, { forwardRef } from "react";
import scss from "@/components/contact/main.module.scss";
import Image from "next/image";
import LinkedInIcon from "@/public/socialsIcons/icons8-linkedin.svg";
import GitHubIcon from "@/public/socialsIcons/icons8-github.svg";
import EMailIcon from "@/public/socialsIcons/icons8-mail.svg";

const Contact = forwardRef<HTMLElement>((props, ref) => (
  <section className={scss.contactWrapper} ref={ref} data-scroll-section>
    <div className={scss.contentWrapper}>
      <div className={scss.leftWrapper}>
        <h2>
          <span data-scroll-class={scss.footer_line} data-scroll>
            <span>Consider Reaching Out To Me!</span>
          </span>
        </h2>
      </div>
      <div className={scss.rightWrapper}>
        <div className={scss.rightWrapper_socialWrapper}>
          <ul>
            <li>
              <Image
                src={LinkedInIcon}
                alt="LinkedIn"
                layout="fill"
                onClick={() => window.open("https://www.linkedin.com/in/michaelatrinh/", "_blank")}
              />
            </li>
            <li>
              <Image
                src={GitHubIcon}
                alt="GitHub"
                layout="fill"
                onClick={() => window.open("https://github.com/michaelatrinh/", "_blank")}
              />
            </li>
            <li>
              <Image
                src={EMailIcon}
                alt="Email"
                layout="fill"
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
));

Contact.displayName = "Contact";

export default Contact;
