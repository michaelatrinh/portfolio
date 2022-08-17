import React, { Suspense } from "react";
import scss from "../vscode/vscode.module.scss";
import Spline from "@splinetool/react-spline";

function VSCode3D() {
  return (
    <React.Fragment>
      <div className={scss.absWrapper}>
        <div className={scss.wrapper}>
          <Suspense fallback={"..."}>
            <Spline scene="https://prod.spline.design/QAO1UmCqGxC3O4oh/scene.splinecode" className={scss.spline} />
          </Suspense>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VSCode3D;
