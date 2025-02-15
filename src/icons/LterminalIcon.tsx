import React from 'react';
import { IconProps } from '../types';

const LterminalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
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
    <path id="ahp-icon-lterminal" d="M245.37,48.77H26.51c-3.34,0-6.04,2.7-6.04,6.04L4.59,201.19c0,3.34,2.7,6.04,6.04,6.04h218.86c3.34,0,6.04-2.7,6.04-6.04l15.87-146.37c0-3.34-2.7-6.04-6.04-6.04ZM219.66,191.35H20.47l15.87-126.71h199.19l-15.87,126.71ZM45.39,158.45l26.42-26.42-26.42-26.42c-4.13-4.13-4.13-10.83,0-14.96,4.13-4.13,10.83-4.13,14.96,0l41.39,41.38-41.39,41.39c-2.06,2.07-4.77,3.1-7.48,3.1s-5.42-1.03-7.48-3.1c-4.13-4.13-4.13-10.83,0-14.96ZM100.77,168.46c0-5.84,4.74-10.58,10.58-10.58h75.3c5.84,0,10.58,4.74,10.58,10.58s-4.74,10.58-10.58,10.58h-75.3c-5.84,0-10.58-4.74-10.58-10.58Z"/>
  </svg>
);

export default LterminalIcon;