import React, { useEffect, useRef } from "react";
import scss from "@/styles/test.module.scss";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import PageHead from "@/components/_head";

import NavBar from "@/components/navBar";
import Header from "@/components/homeHeader";
import Skills from "@/components/homeSkills";
import WorksSummary from "@/components/worksSummary";
import WorksShowcase from "@/components/worksShowcase";

export default function Test(): JSX.Element {
  return (
    <>
      <PageHead title="Test Page" />
    
      <NavBar />

      <Header />
      <Skills />
      <WorksSummary />
      {/* <WorksShowcase /> */}
    </>
  )
}