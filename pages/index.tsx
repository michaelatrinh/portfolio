import React, { useEffect, useRef } from "react";
import PageHead from "@/components/_head";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import NavBar from "@/components/navBar";
import Header from "@/components/homeHeader";
import Skills from "@/components/homeSkills";
import WorksSummary from "@/components/worksSummary";
import WorksShowcase from "@/components/worksShowcase";
import Contact from "@/components/contact";

export default function Test(): JSX.Element {
  const { scroll } = useLocomotiveScroll();
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLElement>(null);
  const worksSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (scroll) scroll.update();
  }, [scroll]);

  const handleNavHomeClick = () => scroll.scrollTo(homeSectionRef.current, 0);
  const handleNavSkillsClick = () => scroll.scrollTo(skillsSectionRef.current, 0);
  const handleNavWorksClick = () => scroll.scrollTo(worksSectionRef.current, 0);
  const handleNavContactClick = () => scroll.scrollTo(contactSectionRef.current, 0);

  return (
    <>
      <PageHead title="Michael Trinh's Portfolio" />
    
      <NavBar 
        navHome={handleNavHomeClick}
        navSkills={handleNavSkillsClick}
        navWorks={handleNavWorksClick} 
        navContact={handleNavContactClick}
      />

      <Header ref={homeSectionRef} />
      <Skills ref={skillsSectionRef} />
      <WorksSummary ref={worksSectionRef} />
      <WorksShowcase />
      <Contact ref={contactSectionRef} />
    </>
  )
}