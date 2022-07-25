import React, { useEffect, useRef } from "react";
import scss from "@/styles/test.module.scss";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import PageHead from "@/components/_head";

import NavBar from "@/components/navBar";
import Header from "@/components/homeHeader";
import WorksSummary from "@/components/worksSummary";
import Skills from "@/components/homeSkills";

export default function Test(): JSX.Element {
  return (
    <>
      <PageHead title="Test Page" />
    
      <NavBar />

      <Header />
      <Skills />
      {/* <WorksSummary /> */}

      {/* <div className={scss.worksDisplayWrapper} data-scroll-section>
        <div className={scss.contentWrapper}>
          <div className={scss.worksDisplayWrapper_left}>

          </div>
          <div className={scss.worksDisplayWrapper_right}>

          </div>
        </div>
      </div> */}

    </>
  )
}