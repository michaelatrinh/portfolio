import React, { createRef, useEffect, useRef } from "react";
import PageHead from "@/components/_head";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import NavBar from "@/components/navBar";
import Header from "@/components/homeHeader";
import Skills from "@/components/homeSkills";
import WorksSummary from "@/components/worksSummary";
import WorksShowcase from "@/components/worksShowcase";
import Contact from "@/components/contact";

export default function Test(): JSX.Element {
  const worksSectionRef = useRef<HTMLElement>(null);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) scroll.update();
  }, [scroll])

  const handleNavWorksClick = () => scroll.scrollTo(worksSectionRef.current, 0);

  return (
    <>
      <PageHead title="Test Page" />
    
      <NavBar navWorks={handleNavWorksClick} />

      <Header />
      <Skills />
      <WorksSummary ref={worksSectionRef} />
      <WorksShowcase />
      <Contact />
    </>
  )
}