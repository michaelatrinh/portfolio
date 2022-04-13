import React from 'react';
import scss from '@/styles/works/cleantable.module.scss';

// components
import CleanTableTitle from '@/components/projectTitles/cleanTableTitle';

export default function CleanTable(){
  return (
    <main>
      <section className={scss.pageContainer}>
        {/* bg */}
        <div className={scss.bg} />
        {/* glass effect */}
        <div className={scss.glass} />
      </section>
    </main>
  )
}