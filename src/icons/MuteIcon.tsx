import React from 'react';
import { IconProps } from '../types';

const MuteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
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
    <path
      id="icon-mute"
      d="M245,153.72c2.68,2.68,2.68,7.03,0,9.72-1.34,1.35-3.1,2.01-4.86,2.01s-3.52-.67-4.86-2.01l-25.72-25.72-25.72,25.72c-1.34,1.35-3.1,2.01-4.86,2.01s-3.52-.67-4.86-2.01c-2.68-2.68-2.68-7.03,0-9.72l25.72-25.72-25.72-25.72c-2.68-2.68-2.68-7.04,0-9.72,2.69-2.68,7.03-2.68,9.72,0l25.72,25.72,25.72-25.72c2.69-2.68,7.03-2.68,9.72,0,2.68,2.68,2.68,7.04,0,9.72l-25.72,25.72,25.72,25.72ZM109.65,55.82l-42.14,32.27H17.58c-4.74,0-8.58,3.84-8.58,8.58v63.07c0,4.74,3.84,8.58,8.58,8.58h50.48l41.6,31.86c3.46,2,7.78-.5,7.78-4.49V60.31c0-3.99-4.32-6.49-7.78-4.49Z"
    />
  </svg>
);

export default MuteIcon;
