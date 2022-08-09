import React, { forwardRef, useState } from "react";
import scss from "@/components/homeHeader/main.module.scss";
import Spline from "@splinetool/react-spline";

interface Props {
  children?: React.ReactNode;
  onSplineLoad: () => void;
}

function ActualHeader(props: Props & { ref: React.Ref<HTMLDivElement> }) {
  const Header = forwardRef<HTMLDivElement, Props>(
    ({ children, onSplineLoad, ...otherProps }, ref) => (
      <div className={scss.homeWrapper} ref={ref} data-scroll-section>
        <div className={scss.contentWrapper}>
          <header className={scss.header}>
            {/* {children} */}
            <Spline
              scene="https://prod.spline.design/QAO1UmCqGxC3O4oh/scene.splinecode"
              className={scss.spline}
              onLoadedData={onSplineLoad}
            />
            <h1 className={scss.header_title}>
              <span
                className={scss.header_title_line}
                data-scroll-class={scss.header_title_line_iv}
                data-scroll
                data-scroll-speed="3"
                data-scroll-position="top"
              >
                <span className={scss.header_title_line_text}>
                  Michael Trinh
                </span>
              </span>

              <span
                className={scss.header_title_line2}
                data-scroll-class={scss.header_title_line2_iv}
                data-scroll
                data-scroll-speed="2"
                data-scroll-position="top"
              >
                <span className={scss.header_title_line2_text}>
                  front &nbsp;
                </span>
              </span>
              <span
                className={scss.header_title_line2}
                data-scroll-class={scss.header_title_line2_iv}
                data-scroll
                data-scroll-speed="2.5"
                data-scroll-position="top"
              >
                <span className={scss.header_title_line2_text}>end &nbsp;</span>
              </span>
              <span
                className={scss.header_title_line2}
                data-scroll-class={scss.header_title_line2_iv}
                data-scroll
                data-scroll-speed="3"
                data-scroll-position="top"
              >
                <span className={scss.header_title_line2_text}>developer</span>
              </span>
            </h1>
            <hr
              className={scss.header_hr}
              data-scroll-class={scss.header_hr_iv}
              data-scroll
              data-scroll-offset="100"
            />
          </header>
        </div>
      </div>
    )
  );

  Header.displayName = "Header";

  return <Header {...props} />;
}

export default ActualHeader;
