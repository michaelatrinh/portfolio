import React, { useEffect, useRef, useState } from "react";
import PageHead from "@/components/_head";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import NavBar from "@/components/navBar";
import Header from "@/components/homeHeader/index.server";
import Skills from "@/components/homeSkills";
import WorksSummary from "@/components/worksSummary";
import WorksShowcase from "@/components/worksShowcase";
import Contact from "@/components/contact";
import LottieLoading from "@/components/lottieLoading/index.server.js";

export default function Test(): JSX.Element {
  const [loadedWindow, setLoadedWindow] = useState(false);
  const [loadedSpline, setLoadedSpline] = useState(false);

  const { scroll } = useLocomotiveScroll();
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLElement>(null);
  const worksSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (scroll) scroll.update();
  }, [scroll]);

  useEffect(() => {
    const onPageLoad = () => {
      setLoadedWindow(true);
    };

    if (document.readyState === "complete") {
      setTimeout(() => {
        onPageLoad();
      }, 1500);
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const handleNavHomeClick = () => scroll.scrollTo(homeSectionRef.current, 0);
  const handleNavSkillsClick = () =>
    scroll.scrollTo(skillsSectionRef.current, 0);
  const handleNavWorksClick = () => scroll.scrollTo(worksSectionRef.current, 0);
  const handleNavContactClick = () =>
    scroll.scrollTo(contactSectionRef.current, 0);

  function onSplineLoad() {
    if (loadedSpline === false) setLoadedSpline(true);
  }

  return (
    <>
      {loadedWindow === false ? (
        <LottieLoading />
      ) : (
        <React.Fragment>
          <PageHead title="Michael Trinh's Portfolio" />

          <NavBar
            navHome={handleNavHomeClick}
            navSkills={handleNavSkillsClick}
            navWorks={handleNavWorksClick}
            navContact={handleNavContactClick}
          />

          <Header ref={homeSectionRef} onSplineLoad={onSplineLoad}></Header>
          <Skills ref={skillsSectionRef} />
          <WorksSummary ref={worksSectionRef} />
          <WorksShowcase />
          <Contact ref={contactSectionRef} />
        </React.Fragment>
      )}
    </>
  );
}
