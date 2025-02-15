import React from 'react';
import { IconProps } from '../types';

const SourieaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
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
    <path id="ahp-icon-sourie01" d="M137.81,6.42h6.61c32.7,0,60.11,24.94,61.25,56.53l1.52,42.12h-69.38V6.42ZM118.19,105.06V6.42h-6.61c-32.7,0-60.11,24.94-61.25,56.53l-1.52,42.12h69.38ZM48.1,124.68l-2.1,58.32c-1.31,36.29,27.18,66.58,63.67,66.58h36.65c36.49,0,64.98-30.28,63.67-66.58l-2.1-58.32H48.1Z"/>
  </svg>
);

export default SourieaIcon;