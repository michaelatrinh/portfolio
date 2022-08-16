import React, { Suspense } from "react";
import scss from "../clean_table/cleanTableLogo.module.scss";
import Spline from "@splinetool/react-spline";

function CleanTable3DLogo() {
  return (
    <React.Fragment>
      <Suspense fallback={"..."}>
        <Spline scene="https://prod.spline.design/XlGAIVZuUJt1Lw7e/scene.splinecode" className={scss.spline} />
      </Suspense>
    </React.Fragment>
  );
}

export default CleanTable3DLogo;
