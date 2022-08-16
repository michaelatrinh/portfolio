import React, { forwardRef } from "react";
import scss from "@/components/worksSummary/main.module.scss";

const WorksSummary = forwardRef<HTMLElement>((props, ref) => (
  <section className={scss.worksSummaryWrapper} ref={ref} data-scroll-section>
    <div className={scss.contentWrapper}>
      <div className={scss.worksSummaryWrapper_summary}>
        <div className={scss.worksSummaryWrapper_left} data-scroll>
          <h2 id={scss.worksSummary_title}>Works</h2>
        </div>
        <div className={scss.worksSummaryWrapper_right} data-scroll>
          <details>
            <summary>Large Projects</summary>
            <ul className={scss.works_summary_list}>
              <li className={scss.works_summary_list_item}>
                <a href="#cinemagic" data-scroll-to>
                  01. Cinemagic
                </a>
              </li>
              <li className={scss.works_summary_list_item}>
                <a href="#reshare" data-scroll-to>
                  02. Reshare
                </a>
              </li>
              <li className={scss.works_summary_list_item}>
                <a href="#cleantable" data-scroll-to>
                  03. Clean Table
                </a>
              </li>
            </ul>
          </details>
          <details>
            <summary>Small Projects</summary>
            <ul className={scss.works_summary_list}>
              <li className={scss.works_summary_list_item}>
                <a href="#interactiveForm" data-scroll-to>
                  04. Interactive Form
                </a>
              </li>
              <li className={scss.works_summary_list_item}>
                <a href="#tipCalculator" data-scroll-to>
                  05. Tip Calculator
                </a>
              </li>
              <li className={scss.works_summary_list_item}>
                <a href="#adviceGenerator" data-scroll-to>
                  06. Advice Generator
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  </section>
));

WorksSummary.displayName = "WorksSummary";

export default WorksSummary;
