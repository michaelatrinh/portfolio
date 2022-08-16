import React, { Suspense } from "react";
import scss from "../vscode/vscode.module.scss";
import Spline from "@splinetool/react-spline";

function VSCode3D() {
  return (
    <React.Fragment>
      <Suspense fallback={"..."}>
        <Spline scene="https://prod.spline.design/QAO1UmCqGxC3O4oh/scene.splinecode" className={scss.spline} />
      </Suspense>
    </React.Fragment>
  );
}

export default VSCode3D;
