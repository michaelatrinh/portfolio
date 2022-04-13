import React from 'react';
import scss from './expandingBar.module.scss';

export default function expandingBar(){
  return (
    <div className={`${scss.bar} ${scss.animating}`} />
  )
}