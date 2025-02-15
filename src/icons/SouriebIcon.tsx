import React from 'react';
import { IconProps } from '../types';

const SouriebIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
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
    <path id="ahp-icon-sourie02" d="M205.67,62.94c-1.14-31.59-28.55-56.53-61.25-56.53h-32.85c-32.7,0-60.11,24.94-61.25,56.53l-4.32,120.06c-1.31,36.29,27.18,66.58,63.67,66.58h36.65c36.49,0,64.98-30.28,63.67-66.58l-4.32-120.06ZM136.83,99.94c0,4.88-3.95,8.83-8.83,8.83s-8.83-3.95-8.83-8.83v-50.01c0-4.88,3.95-8.83,8.83-8.83s8.83,3.95,8.83,8.83v50.01Z"/>
  </svg>
);

export default SouriebIcon;