import React, { Suspense } from "react";
import scss from "../cinemagic/cinemagicLogo.module.scss";
import Spline from "@splinetool/react-spline";

function Cinemagic3DLogo() {
  return (
    <React.Fragment>
      <Suspense fallback={"..."}>
        <Spline scene="https://prod.spline.design/66O8Wv3ly7STwsjy/scene.splinecode" className={scss.spline} />
      </Suspense>
    </React.Fragment>
  );
}

export default Cinemagic3DLogo;
