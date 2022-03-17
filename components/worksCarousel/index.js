import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import scss from './worksCarousel.module.scss';

export default function worksCarousel(){
  const router = useRouter();

  var counterInitState = 0;
  const [counter, setCounter] = useState(counterInitState);

  const [AStart, setAStart] = useState(true);
  const [AMovedToLeft, setAMovedToLeft] = useState(false);
  const [AmovedToMiddle, setAMovedToMiddle] = useState(false);
  const [AmovedToRight, setAmovedToRight] = useState(false);

  const [BStart, setBStart] = useState(true);
  const [BMovedToLeft, setBMovedToLeft] = useState(false);
  const [BmovedToMiddle, setBMovedToMiddle] = useState(false);
  const [BmovedToRight, setBmovedToRight] = useState(false);

  const [CStart, setCStart] = useState(true);
  const [CMovedToLeft, setCMovedToLeft] = useState(false);
  const [CmovedToMiddle, setCMovedToMiddle] = useState(false);
  const [CmovedToRight, setCmovedToRight] = useState(false);
  
  const ACard = useRef();
  const BCard = useRef();
  const CCard = useRef();

  const handleA = () => {
    // A card moves from LEFT(start) to MIDDLE
    if(AStart){
      ACard.current.classList.remove(scss.prev);
      ACard.current.classList.add(scss.active);

      BCard.current.classList.remove(scss.active);
      BCard.current.classList.add(scss.next);

      CCard.current.classList.remove(scss.next);
      CCard.current.classList.add(scss.prev);

      setAMovedToMiddle(true);
      setAStart(false);

      setBmovedToRight(true);
      setBStart(false);

      setCMovedToLeft(true);
      setCStart(false);

      setCounter(c => c + 1);
      console.log("COUNTER: " + counter);
    }
    
    // A card moves from RIGHT to MIDDLE
    if(AmovedToRight){
      ACard.current.classList.remove(scss.next);
      ACard.current.classList.add(scss.active);

      BCard.current.classList.remove(scss.prev);
      BCard.current.classList.add(scss.next);

      CCard.current.classList.remove(scss.active);
      CCard.current.classList.add(scss.prev);

      setAMovedToMiddle(true);
      setAmovedToRight(false);

      setBmovedToRight(true);
      setBMovedToLeft(false);

      setCMovedToLeft(true);
      setCMovedToMiddle(false);

      setCounter(c => c + 1);
      console.log("COUNTER: " + counter);
    }

    if(AMovedToLeft){
      ACard.current.classList.remove(scss.prev);
      ACard.current.classList.add(scss.active);

      BCard.current.classList.remove(scss.active);
      BCard.current.classList.add(scss.next);

      CCard.current.classList.remove(scss.next);
      CCard.current.classList.add(scss.prev);

      setAMovedToMiddle(true);
      setAMovedToLeft(false);

      setBmovedToRight(true);
      setBMovedToMiddle(false);

      setCMovedToLeft(true);
      setCmovedToRight(false);

      setCounter(c => c + 1);
      console.log("COUNTER: " + counter);
    }
  }

  const handleB = () => {
    // B card moves from RIGHT to MIDDLE
    if(BmovedToRight){
      ACard.current.classList.remove(scss.active);
      ACard.current.classList.add(scss.prev);

      BCard.current.classList.remove(scss.next);
      BCard.current.classList.add(scss.active);

      CCard.current.classList.remove(scss.prev);
      CCard.current.classList.add(scss.next);

      setAMovedToLeft(true);
      setAMovedToMiddle(false);

      setBMovedToMiddle(true);
      setBmovedToRight(false);

      setCmovedToRight(true);
      setCMovedToLeft(false);

      setCounter(c => c + 1);
      console.log("COUNTER: " + counter);
    }

    if(BMovedToLeft){
      ACard.current.classList.remove(scss.next);
      ACard.current.classList.add(scss.prev);

      BCard.current.classList.remove(scss.prev);
      BCard.current.classList.add(scss.active);

      CCard.current.classList.remove(scss.active);
      CCard.current.classList.add(scss.next);

      setAMovedToLeft(true);
      setAmovedToRight(false);

      setBMovedToMiddle(true);
      setBMovedToLeft(false);

      setCmovedToRight(true);
      setCMovedToMiddle(false);

      setCounter(c => c + 1);
      console.log("COUNTER: " + counter);
    }
  }

  const handleC = () => {
    // C card moves from RIGHT(start) to MIDDLE
    if(CStart){
      ACard.current.classList.remove(scss.prev);
      ACard.current.classList.add(scss.next);

      BCard.current.classList.remove(scss.active);
      BCard.current.classList.add(scss.prev);
      
      CCard.current.classList.remove(scss.next);
      CCard.current.classList.add(scss.active);

      setAmovedToRight(true);
      setAStart(false);

      setBMovedToLeft(true);
      setBStart(false);

      setCMovedToMiddle(true);
      setCStart(false);

      setCounter(c => c + 1);
      console.log("COUNTER: " + counter);
    }

    // C card moves from RIGHT to MIDDLE
    if(CmovedToRight){
      ACard.current.classList.remove(scss.prev);
      ACard.current.classList.add(scss.next);

      BCard.current.classList.remove(scss.active);
      BCard.current.classList.add(scss.prev);
      
      CCard.current.classList.remove(scss.next);
      CCard.current.classList.add(scss.active);

      setAmovedToRight(true);
      setAStart(false);

      setBMovedToLeft(true);
      setBStart(false);
      setBMovedToMiddle(false);

      setCMovedToMiddle(true);
      setCStart(false);

      setCounter(c => c + 1);
      console.log("COUNTER: " + counter);
    }

    // C card moves from LEFT to MIDDLE
    if(CMovedToLeft){
      ACard.current.classList.remove(scss.active);
      ACard.current.classList.add(scss.next);

      BCard.current.classList.remove(scss.next);
      BCard.current.classList.add(scss.prev);
      
      CCard.current.classList.remove(scss.prev);
      CCard.current.classList.add(scss.active);

      setAmovedToRight(true);
      setAMovedToMiddle(false);

      setBMovedToLeft(true);
      setBmovedToRight(false);

      setCMovedToMiddle(true);
      setCMovedToLeft(false);

      setCounter(c => c + 1);
      console.log("COUNTER: " + counter);
    }
  }

  const handleProjectClick = () => {
    if(BStart) return router.push("/works/reshare");
    
    if(AmovedToMiddle) return router.push("/works/cleantable");
    if(BmovedToMiddle) return router.push("/works/reshare");
    if(CmovedToMiddle) return router.push("/works/cinemagic");
  }

  var cleantableTextRef = useRef();
  var reshareTextRef = useRef();
  var cinemagicTextRef = useRef();

  // useEffect(() => {
  //   cleantableTextRef.current.animate({
  //     opacity: [0, 1]
  //   });
  //   reshareTextRef.current.animate({
  //     opacity: [0, 1]
  //   });
  //   cinemagicTextRef.current.animate({
  //     opacity: [0, 1]
  //   });
  // }, [counter]);

  const reshareText = () => {
    if(BStart){
      return (
        <div className={scss.activeText} ref={reshareTextRef}>
          <h2>Reshare</h2>
          <p>A school mobile application project that serves as a marketplace to resolve and reduce the amount of food waste caused by grocery stores in the metro Vancouver region.</p>
        </div>
      )
    } else if(BmovedToMiddle){
      return (
        <div className={scss.activeText} ref={reshareTextRef}>
          <h2>Reshare</h2>
          <p>A school mobile application project that serves as a marketplace to resolve and reduce the amount of food waste caused by grocery stores in the metro Vancouver region.</p>
        </div>
      )
    }
  }

  const cleantableText = () => {
    if(AmovedToMiddle){
      return (
        <div className={scss.activeText} ref={cleantableTextRef}>
          <h2>Clean Table</h2>
          <p>A school web application project that aims to provide a solution to the increasing amount of food wastes found in landfills, by offering users a way to track their ingredients left within their pantry and create recipes utilizing their near-expiring produce.</p>
        </div>
      )
    }
  }

  const cinemagicText = () => {
    if(CmovedToMiddle){
      return (
        <div className={scss.activeText} ref={cinemagicTextRef}>
          <h2>Cinemagic</h2>
          <p>A school web application project that provides users with movie recommendations based on 25 years worth of data collected from IMDB.</p>
        </div>
      )
    }
  }

  return (
    <div className={scss.container}>
      <div className={scss.textContainer}>
        {AmovedToMiddle ? cleantableText() : ""}
        {BStart ? reshareText() : ""}
        {BmovedToMiddle ? reshareText() : ""}
        {CmovedToMiddle ? cinemagicText() : ""}
      </div>
      <ul className={scss.list}>
        <li className={scss.prev} ref={ACard} onClick={ handleA }>
          <img 
            src="cleantableLogo2.png"
            className={scss.images}
          />
        </li>
        <li className={scss.active} ref={BCard} onClick={ handleB }>
          <img
            src="reshareLogo.png" 
            className={scss.images}
          />
        </li>
        <li className={scss.next} ref={CCard} onClick={ handleC }>
          <img 
            src="cinemagicLogo.png"
            className={scss.images}
          />
        </li>
      </ul>
      <div className={scss.project} onClick={ handleProjectClick } />
    </div>
  )
}