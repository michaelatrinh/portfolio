import React from 'react';
import scss from '@/components/worksSummary/main.module.scss';

export default function WorksSummary(): JSX.Element {
  return (
    <div className={scss.worksSummaryWrapper} data-scroll-section>
      <div className={scss.contentWrapper}>
        <div className={scss.worksSummaryWrapper_summary} data-scroll>
          <div className={scss.worksSummaryWrapper_left} data-scroll>
            <h2 id={scss.worksSummary_title}>Works</h2>
          </div>
          <div className={scss.worksSummaryWrapper_right} data-scroll>
            <ul className={scss.works_summary_list}>
              <li className={scss.works_summary_list_item} data-scroll>
                <a href="#cinemagic" data-scroll-to>01. Cinemagic</a>
              </li>
              <li className={scss.works_summary_list_item} data-scroll>
                <a href="#reshare" data-scroll-to>02. Reshare</a>
              </li>
              <li className={scss.works_summary_list_item} data-scroll>
                <a href="#cleantable" data-scroll-to>03. Clean Table</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}