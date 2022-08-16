import React, { Suspense } from "react";
import scss from "../reshare/reshareLogo.module.scss";
import Spline from "@splinetool/react-spline";

function Reshare3DLogo() {
  return (
    <React.Fragment>
      <Suspense fallback={"..."}>
        <Spline scene="https://prod.spline.design/sB8KJJrTV4iqBWjz/scene.splinecode" className={scss.spline} />
      </Suspense>
    </React.Fragment>
  );
}

export default Reshare3DLogo;
