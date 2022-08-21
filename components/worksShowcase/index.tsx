import React from "react";
import scss from "@/components/worksShowcase/main.module.scss";
import { MdOutlineSmartphone, MdOutlineComputer } from "react-icons/md";

import Project from "@/components/worksShowcase/project";
import SmallProject from "@/components/worksShowcase/smallProject";

import Cinemagic3DLogo from "@/components/spline/logos/cinemagic/cinemagicLogo.server";
import Reshare3DLogo from "@/components/spline/logos/reshare/reshareLogo.server";
import CleanTable3DLogo from "@/components/spline/logos/clean_table/cleanTableLogo.server";

import CinemagicScreens from "@/public/cinemagic/cinemagic_monitor_phone.png";
import ReshareScreens from "@/public/reshare/reshare_phone.png";
import CleanTableScreens from "@/public/cleantable/cleantable_screens.png";
import InteractiveFormDemo from "@/public/smallProjects/interactiveForm/screenshot.png";
import TipCalculatorDemo from "@/public/smallProjects/tipCalculator/screenshot.jpg";
import AdviceGeneratorDemo from "@/public/smallProjects/adviceGenerator/screenshot.png";

export default function WorksShowcase(): JSX.Element {
  return (
    <React.Fragment>
      {/* CINEMAGIC SECTION */}
      <section className={scss.worksWrapper} data-scroll-section>
        <Project
          id="cinemagic"
          orderNo="01."
          name="Cinemagic"
          desc="A school web application project that provides users with movie recommendations based on data collected from IMDB and compiled by Kaggle."
          deviceIcons={
            <React.Fragment>
              <MdOutlineComputer /> <MdOutlineSmartphone />
            </React.Fragment>
          }
          logo={<Cinemagic3DLogo />}
          demo={CinemagicScreens}
          techList={
            <React.Fragment>
              <li>Next.js {`(React.js)`}</li>
              <li>JavaScript</li>
              <li>RESTful APIs</li>
              <li>Socket.IO {`(Node.js)`}</li>
              <li>Firebase</li>
              <li>SASS / SCSS</li>
            </React.Fragment>
          }
          githubLink="https://github.com/michaelatrinh/cinemagic"
        />
      </section>

      {/* RESHARE SECTION */}
      <section className={scss.worksWrapper} data-scroll-section>
        <Project
          id="reshare"
          orderNo="02."
          name="Reshare"
          desc="A school mobile application project that serves as a marketplace to resolve and reduce the amount of food waste caused by grocery stores in the metro Vancouver region."
          deviceIcons={
            <React.Fragment>
              <MdOutlineSmartphone />
            </React.Fragment>
          }
          logo={<Reshare3DLogo />}
          demo={ReshareScreens}
          techList={
            <React.Fragment>
              <li>Expo {`(React Native)`}</li>
              <li>JavaScript</li>
              <li>RESTful APIs</li>
              <li>Firebase</li>
              <li>Styled-Components {`(CSS)`}</li>
            </React.Fragment>
          }
          githubLink="https://github.com/michaelatrinh/reshareApp"
        />
      </section>

      {/* CLEAN TABLE SECTION */}
      <section className={scss.worksWrapper} data-scroll-section>
        <Project
          id="cleantable"
          orderNo="03."
          name="Clean Table"
          desc="A school web application project that aims to provide a solution to the increasing amount of food wastes found in landfills, by offering users a way to track their ingredients left within their pantry and create recipes utilizing their near-expiring produce."
          deviceIcons={
            <React.Fragment>
              <MdOutlineComputer />
            </React.Fragment>
          }
          logo={<CleanTable3DLogo />}
          demo={CleanTableScreens}
          techList={
            <React.Fragment>
              <li>Next.js {`(React.js)`}</li>
              <li>JavaScript</li>
              <li>Styled-Components {`(CSS)`}</li>
            </React.Fragment>
          }
          githubLink="https://github.com/michaelatrinh/Clean-Table-App"
        />
      </section>

      {/* INTERACTIVE FORM SECTION */}
      <section className={scss.worksWrapper} data-scroll-section>
        <SmallProject
          id="interactiveForm"
          orderNo="04."
          name="Interactive Form"
          desc="An interactive form in which users can see the updates to the UI in real-time as they fill in the input boxes."
          deviceIcons={
            <React.Fragment>
              <MdOutlineComputer />
            </React.Fragment>
          }
          demo={InteractiveFormDemo}
          techList={
            <React.Fragment>
              <li>React.js</li>
              <li>TypeScript</li>
              <li>SASS / SCSS</li>
            </React.Fragment>
          }
          githubLink="https://github.com/michaelatrinh/interactive-card-details-form"
        />
      </section>

      {/* TIP CALCULATOR SECTION */}
      <section className={scss.worksWrapper} data-scroll-section>
        <SmallProject
          id="tipCalculator"
          orderNo="05."
          name="Tip Calculator"
          desc="A nice and simple tip calculator!"
          deviceIcons={
            <React.Fragment>
              <MdOutlineComputer />
            </React.Fragment>
          }
          demo={TipCalculatorDemo}
          techList={
            <React.Fragment>
              <li>AngularJS</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>SASS / SCSS</li>
            </React.Fragment>
          }
          githubLink="https://github.com/michaelatrinh/tip-calculator-app"
        />
      </section>

      {/* ADVICE GENERATOR SECTION */}
      <section className={scss.worksWrapper} data-scroll-section>
        <SmallProject
          id="adviceGenerator"
          orderNo="06."
          name="Advice Generator"
          desc="An app that allows users to click and generate a random advice snippet."
          deviceIcons={
            <React.Fragment>
              <MdOutlineComputer />
            </React.Fragment>
          }
          demo={AdviceGeneratorDemo}
          techList={
            <React.Fragment>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>REST API</li>
              <li>SASS / SCSS</li>
            </React.Fragment>
          }
          githubLink="https://github.com/michaelatrinh/advice-generator-app"
        />

        <div className={scss.contentWrapper}>
          <div style={{ paddingBottom: "7.5rem" }}></div>
          <hr className={scss.header_hr} data-scroll-class={scss.header_hr_iv} data-scroll data-scroll-offset="100" />
        </div>
      </section>
    </React.Fragment>
  );
}
