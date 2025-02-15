import React from 'react';
import { IconProps } from '../types';

const ExpandbIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    id="mute"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill={color}
    stroke="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path id="ahp-icon-expanda" d="M87.79,186.31l-27.52,27.52h42.23v25.59H16.58s0-85.91,0-85.91h25.59s0,42.23,0,42.23l27.52-27.52,28.27-28.27,18.09,18.09-28.27,28.27ZM139.95,97.96l18.09,18.09,28.27-28.27,27.52-27.52v42.23s25.59,0,25.59,0V16.58s-85.91,0-85.91,0v25.58h42.23s-27.52,27.52-27.52,27.52l-28.27,28.27ZM42.17,102.5v-42.23s27.52,27.52,27.52,27.52l28.27,28.27,18.09-18.09-28.27-28.27-27.52-27.52h42.23s0-25.59,0-25.59H16.58s0,85.91,0,85.91h25.58ZM153.5,239.42h85.92s0-85.91,0-85.91h-25.58v42.23s-27.52-27.52-27.52-27.52l-28.27-28.27-18.09,18.09,28.27,28.27,27.52,27.52h-42.23s0,25.59,0,25.59Z"/>
  </svg>
);

export default ExpandbIcon;