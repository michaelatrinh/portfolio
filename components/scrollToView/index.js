import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import scss from './scrollToView.module.scss';
import { BsChevronCompactDown } from 'react-icons/bs';

export default function ScrollToView({
  onScrollDownClick = () => {}
}){
  return (
    <div className={scss.container} onClick={onScrollDownClick}>
      <p>Scroll Down</p>
      <BsChevronCompactDown className={scss.icon} size='3rem' />
    </div>
  )
}