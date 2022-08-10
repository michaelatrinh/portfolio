import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function LottieLoading() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("@/public/lottie/loading.json")
    });
  }, []);

  return (
    <React.Fragment>
      <div style={{ width: "100vw", height: "100vh" }} ref={lottieContainer} />
    </React.Fragment>
  );
}

export default LottieLoading;
