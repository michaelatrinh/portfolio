import React, { forwardRef, Suspense } from "react";
import scss from "@/components/homeHeader/main.module.scss";
import dynamic from "next/dynamic";

import VSCode3DModel from "../spline/vscode/vscode.server";
// const VSCode3DModel = dynamic(() => import("../spline/vscode.server"), {
//   suspense: true
// });

interface Props {
  children?: React.ReactNode;
}

const Header = forwardRef<HTMLDivElement, Props>(({ children, ...otherProps }, ref) => (
  <div className={scss.homeWrapper} ref={ref} data-scroll-section>
    <div className={scss.contentWrapper}>
      <header className={scss.header}>
        {/* {children} */}
        <VSCode3DModel />
        <h1 className={scss.header_title}>
          <span
            className={scss.header_title_line}
            data-scroll-class={scss.header_title_line_iv}
            data-scroll
            data-scroll-speed="3"
            data-scroll-position="top"
          >
            <span className={scss.header_title_line_text}>Michael Trinh</span>
          </span>

          <span
            className={scss.header_title_line2}
            data-scroll-class={scss.header_title_line2_iv}
            data-scroll
            data-scroll-speed="2"
            data-scroll-position="top"
          >
            <span className={scss.header_title_line2_text}>front &nbsp;</span>
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
        <hr className={scss.header_hr} data-scroll-class={scss.header_hr_iv} data-scroll data-scroll-offset="100" />
      </header>
    </div>
  </div>
));

Header.displayName = "Header";

export default Header;
