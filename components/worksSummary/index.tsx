import React, { forwardRef } from 'react';
import scss from '@/components/worksSummary/main.module.scss';

const WorksSummary = forwardRef<HTMLElement>((props, ref) => (
  <section 
    className={scss.worksSummaryWrapper} 
    ref={ref}
    data-scroll-section
  >
    <div className={scss.contentWrapper}>
        <div className={scss.worksSummaryWrapper_summary}>
          <div 
            className={scss.worksSummaryWrapper_left} 
            data-scroll
          >
            <h2 id={scss.worksSummary_title}>
              Works
            </h2>
          </div>
          <div 
            className={scss.worksSummaryWrapper_right} 
            data-scroll
          >
            <ul className={scss.works_summary_list}>
              <li className={scss.works_summary_list_item}>
                <a href="#cinemagic" data-scroll-to>01. Cinemagic</a>
              </li>
              <li className={scss.works_summary_list_item}>
                <a href="#reshare" data-scroll-to>02. Reshare</a>
              </li>
              <li className={scss.works_summary_list_item}>
                <a href="#cleantable" data-scroll-to>03. Clean Table</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </section>
));

export default WorksSummary;