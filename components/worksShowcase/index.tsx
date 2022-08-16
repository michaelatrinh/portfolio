import React from "react";
import scss from "@/components/worksShowcase/main.module.scss";
import Image from "next/image";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { MdOutlineSmartphone, MdOutlineComputer } from "react-icons/md";

import CinemagicScreens from "@/public/cinemagic/cinemagic_monitor_phone.png";
import ReshareScreens from "@/public/reshare/reshare_phone.png";
import CleanTableScreens from "@/public/cleantable/cleantable_screens.png";

import Cinemagic3DLogo from "@/components/spline/logos/cinemagic/cinemagicLogo.server";
import Reshare3DLogo from "@/components/spline/logos/reshare/reshareLogo.server";
import CleanTable3DLogo from "@/components/spline/logos/clean_table/cleanTableLogo.server";

export default function WorksShowcase(): JSX.Element {
  return (
    <React.Fragment>
      <section className={scss.worksWrapper} data-scroll-section>
        <div className={scss.contentWrapper}>
          <div>
            <div className={scss.leftWrapper}>
              <div className={scss.works_text} data-scroll data-scroll-speed="-2">
                <h4>
                  <span className={scss.works_text_number}>01.</span>
                  &nbsp; Cinemagic
                  <span className={scss.works_text_responsiveIcons}>
                    &nbsp; &nbsp; <MdOutlineComputer />
                    <MdOutlineSmartphone />
                  </span>
                </h4>
                <p>
                  A school web application project that provides users with movie recommendations based on data
                  collected from IMDB and compiled by Kaggle.
                </p>
              </div>
            </div>
            <div className={scss.rightWrapper}>
              <div className={scss.works_logoWrapper} data-scroll data-scroll-speed="2">
                <Cinemagic3DLogo />
              </div>
            </div>
          </div>

          <div>
            <div className={scss.leftWrapper}>
              <div className={scss.works_screens} data-scroll data-scroll-speed="2">
                <Image src={CinemagicScreens} alt="Cinemagic App Demo" />
              </div>
            </div>
            <div className={scss.rightWrapper}>
              <div className={scss.works_text} data-scroll data-scroll-speed="0.25">
                <h4>Built With:</h4>
                <ul>
                  <li>Next.js {`(React.js)`}</li>
                  <li>JavaScript</li>
                  <li>RESTful APIs</li>
                  <li>Socket.IO {`(Node.js)`}</li>
                  <li>Firebase</li>
                  <li>SASS / SCSS</li>
                </ul>
                <p
                  onClick={() =>
                    window.open("https://github.com/michaelatrinh/cinemagic", "_blank", "noopener noreferrer")
                  }
                >
                  <BsFillArrowRightSquareFill /> &nbsp; View GitHub Repository
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={scss.worksWrapper} data-scroll-section>
        <div className={scss.contentWrapper}>
          <div>
            <div className={scss.leftWrapper}>
              <div className={scss.works_text} data-scroll data-scroll-speed="-2">
                <h4>
                  <span className={scss.works_text_number}>02.</span>
                  &nbsp; Reshare
                  <span className={scss.works_text_responsiveIcons}>
                    &nbsp; &nbsp; <MdOutlineSmartphone />
                  </span>
                </h4>
                <p>
                  A school mobile application project that serves as a marketplace to resolve and reduce the amount of
                  food waste caused by grocery stores in the metro Vancouver region.
                </p>
              </div>
            </div>
            <div className={scss.rightWrapper}>
              <div className={scss.works_logoWrapper} data-scroll data-scroll-speed="2">
                <Reshare3DLogo />
              </div>
            </div>
          </div>

          <div>
            <div className={scss.leftWrapper}>
              <div className={scss.works_screens} data-scroll data-scroll-speed="2">
                <Image src={ReshareScreens} alt="Reshare App Demo" />
              </div>
            </div>
            <div className={scss.rightWrapper}>
              <div
                className={scss.works_text}
                data-scroll
                data-scroll-speed="0.25"
                // data-scroll-position="top"
              >
                <h4>Built With:</h4>
                <ul>
                  <li>Expo {`(React Native)`}</li>
                  <li>JavaScript</li>
                  <li>RESTful APIs</li>
                  <li>Firebase</li>
                  <li>Styled-Components {`(CSS)`}</li>
                </ul>
                <p
                  onClick={() =>
                    window.open("https://github.com/michaelatrinh/reshareApp", "_blank", "noopener noreferrer")
                  }
                >
                  <BsFillArrowRightSquareFill /> &nbsp; View GitHub Repository
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={scss.worksWrapper} data-scroll-section>
        <div className={scss.contentWrapper}>
          <div>
            <div className={scss.leftWrapper}>
              <div className={scss.works_text} data-scroll data-scroll-speed="-2">
                <h4>
                  <span className={scss.works_text_number}>03.</span>
                  &nbsp; Clean Table
                  <span className={scss.works_text_responsiveIcons}>
                    &nbsp; &nbsp; <MdOutlineComputer />
                  </span>
                </h4>
                <p>
                  A school web application project that aims to provide a solution to the increasing amount of food
                  wastes found in landfills, by offering users a way to track their ingredients left within their pantry
                  and create recipes utilizing their near-expiring produce.
                </p>
              </div>
            </div>
            <div className={scss.rightWrapper}>
              <div className={scss.works_logoWrapper} data-scroll data-scroll-speed="2">
                <CleanTable3DLogo />
              </div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className={scss.leftWrapper}>
              <div className={scss.works_screens} data-scroll data-scroll-speed="2">
                <Image src={CleanTableScreens} alt="Clean Table App Demo" />
              </div>
            </div>
            <div className={scss.rightWrapper}>
              <div
                className={scss.works_text}
                data-scroll
                data-scroll-speed="1"
                // data-scroll-position="top"
              >
                <h4>Built With:</h4>
                <ul>
                  <li>Next.js {`(React.js)`}</li>
                  <li>JavaScript</li>
                  <li>Styled-Components {`(CSS)`}</li>
                </ul>
                <p
                  onClick={() =>
                    window.open("https://github.com/michaelatrinh/Clean-Table-App", "_blank", "noopener noreferrer")
                  }
                >
                  <BsFillArrowRightSquareFill /> &nbsp; View GitHub Repository
                </p>
              </div>
            </div>

            <div style={{ paddingBottom: "7.5rem" }}></div>
            <hr className={scss.header_hr} data-scroll-class={scss.header_hr_iv} data-scroll data-scroll-offset="100" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
