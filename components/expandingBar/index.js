import React from 'react';
import styles from './style.module.css';

export default function expandingBar({ children }){
  return (
    <div className={`${styles.bar} ${styles.animating}`}>
      { children }
    </div>
  )
}