import React, { useEffect, useRef, useState } from "react";
import PageHead from "@/components/_head";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import NavBar from "@/components/navBar";
import Header from "@/components/homeHeader";
import Skills from "@/components/homeSkills";
import WorksSummary from "@/components/worksSummary";
import WorksShowcase from "@/components/worksShowcase";
import Contact from "@/components/contact";

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

    if (document.readyState === "complete") onPageLoad();
    else {
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
        <h1 style={{ color: "white" }}>Loading...</h1>
      ) : (
        <React.Fragment>
          <PageHead title="Michael Trinh's Portfolio" />

          <NavBar
            navHome={handleNavHomeClick}
            navSkills={handleNavSkillsClick}
            navWorks={handleNavWorksClick}
            navContact={handleNavContactClick}
          />

          <Header ref={homeSectionRef} onSplineLoad={onSplineLoad}>
            {/* <Spline
            scene="https://prod.spline.design/QAO1UmCqGxC3O4oh/scene.splinecode"
            // className={scss.spline}
            // onLoadedData={onSplineLoad}
          /> */}
          </Header>
          <Skills ref={skillsSectionRef} />
          <WorksSummary ref={worksSectionRef} />
          <WorksShowcase />
          <Contact ref={contactSectionRef} />
        </React.Fragment>
      )}
    </>
  );
}
