import React from "react";
import scss from "@/components/worksShowcase/main.module.scss";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { MdOutlineSmartphone, MdOutlineComputer } from "react-icons/md";
import Spline from "@splinetool/react-spline";

export default function WorksShowcase(): JSX.Element {
  return (
    <>
      <section className={scss.worksWrapper} data-scroll-section>
        <div className={scss.contentWrapper}>
          <div>
            <div className={scss.leftWrapper}>
              <div
                className={scss.works_text}
                data-scroll
                data-scroll-speed="-2"
              >
                <h4>
                  <span className={scss.works_text_number}>01.</span>
                  &nbsp; Cinemagic
                  <span className={scss.works_text_responsiveIcons}>
                    &nbsp; &nbsp; <MdOutlineComputer />
                    <MdOutlineSmartphone />
                  </span>
                </h4>
                <p>
                  A school web application project that provides users with
                  movie recommendations based on data collected from IMDB and
                  compiled by Kaggle.
                </p>
              </div>
            </div>
            <div className={scss.rightWrapper}>
              <div
                className={scss.works_logoWrapper}
                data-scroll
                data-scroll-speed="2"
              >
                <Spline
                  scene="https://prod.spline.design/66O8Wv3ly7STwsjy/scene.splinecode"
                  className={scss.spline_cinemagicLogo}
                />
                {/* <img 
                  src='/cinemagic/cinemagicLogo.png' 
                  alt='Cinemagic App Logo' 
                  className={scss.works_logoWrapper_logo}
                /> */}
              </div>
            </div>
          </div>

          <div>
            <div className={scss.leftWrapper}>
              <div data-scroll data-scroll-speed="2">
                <img
                  src="/cinemagic/cinemagic_monitor_phone.png"
                  alt="Cinemagic Screens"
                  className={scss.works_logo}
                />
              </div>
            </div>
            <div className={scss.rightWrapper}>
              <div
                className={scss.works_text}
                data-scroll
                data-scroll-speed="0.25"
              >
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
                    window.open(
                      "https://github.com/michaelatrinh/cinemagic",
                      "_blank",
                      "noopener noreferrer"
                    )
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
              <div
                className={scss.works_text}
                data-scroll
                data-scroll-speed="-2"
              >
                <h4>
                  <span className={scss.works_text_number}>02.</span>
                  &nbsp; Reshare
                  <span className={scss.works_text_responsiveIcons}>
                    &nbsp; &nbsp; <MdOutlineSmartphone />
                  </span>
                </h4>
                <p>
                  A school mobile application project that serves as a
                  marketplace to resolve and reduce the amount of food waste
                  caused by grocery stores in the metro Vancouver region.
                </p>
              </div>
            </div>
            <div className={scss.rightWrapper}>
              <div
                className={scss.works_logoWrapper}
                data-scroll
                data-scroll-speed="2"
              >
                <img
                  src="/reshare/reshareLogo.png"
                  alt="Reshare App Logo"
                  className={scss.works_logoWrapper_logo}
                />
              </div>
            </div>
          </div>

          <div>
            <div className={scss.leftWrapper}>
              <div data-scroll data-scroll-speed="2">
                <img
                  src="/reshare/reshare_phone.png"
                  alt="Reshare Screens"
                  className={scss.works_logo}
                />
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
                    window.open(
                      "https://github.com/michaelatrinh/reshareApp",
                      "_blank",
                      "noopener noreferrer"
                    )
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
              <div
                className={scss.works_text}
                data-scroll
                data-scroll-speed="-2"
              >
                <h4>
                  <span className={scss.works_text_number}>03.</span>
                  &nbsp; Clean Table
                  <span className={scss.works_text_responsiveIcons}>
                    &nbsp; &nbsp; <MdOutlineComputer />
                  </span>
                </h4>
                <p>
                  A school web application project that aims to provide a
                  solution to the increasing amount of food wastes found in
                  landfills, by offering users a way to track their ingredients
                  left within their pantry and create recipes utilizing their
                  near-expiring produce.
                </p>
              </div>
            </div>
            <div className={scss.rightWrapper}>
              <div
                className={scss.works_logoWrapper}
                data-scroll
                data-scroll-speed="2"
              >
                <img
                  src="/cleantable/cleantableLogo2.png"
                  alt="Clean Table App Logo"
                  className={scss.works_logoWrapper_logo}
                />
              </div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className={scss.leftWrapper}>
              <div data-scroll data-scroll-speed="2">
                <img
                  src="/cleantable/cleantable_screens.png"
                  alt="Clean Table Screens"
                  className={scss.works_logo}
                />
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
                    window.open(
                      "https://github.com/michaelatrinh/Clean-Table-App",
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                >
                  <BsFillArrowRightSquareFill /> &nbsp; View GitHub Repository
                </p>
              </div>
            </div>

            <div style={{ paddingBottom: "7.5rem" }}></div>
            <hr
              className={scss.header_hr}
              data-scroll-class={scss.header_hr_iv}
              data-scroll
              data-scroll-offset="100"
            />
          </div>
        </div>
      </section>
    </>
  );
}
