import React from 'react';
import styled from 'styled-components';
import scss from './style.module.scss';
import { BsChevronCompactDown } from 'react-icons/bs';

export default function ScrollToView({
  onScrollDownClick = () => {}
}){
  return (
    <div className={scss.container} onClick={onScrollDownClick}>
      <p>Scroll Down</p>
      <BsChevronCompactDown color='#FFFFFF' size='3rem' />
    </div>
  )
}