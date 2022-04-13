import React from 'react';
import scss from '@/styles/home/home.module.scss';

import NavBar from '@/components/navBar';
import WorksTitle from '@/components/worksTitle';
import WorksCarousel from '@/components/worksCarousel';

export default function Works(){
  return (
    <main>
      <NavBar />
      <section className={scss.worksWrapper}>
        {/* bg */}
        <div className={scss.bg} />
        {/* glass effect */}
        <div className={scss.glass} />
        <section className={`${scss.worksCont} ${scss.worksContAnimate}`}>
          <div className={scss.worksTitle}>
            <WorksTitle />
          </div>
          {/* <WorksSwiper /> */}
          <WorksCarousel />
        </section>
      </section>
    </main>
  )
}