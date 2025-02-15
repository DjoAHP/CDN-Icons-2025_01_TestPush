import React from 'react';
import { IconProps } from '../types';

const AddwtIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
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
    <path d="M128.36,244.76c0,3.85-3.12,6.98-6.98,6.98H38.87c-17.42,0-31.6-14.18-31.6-31.6v-82.51c0-3.85,3.12-6.98,6.98-6.98s6.98,3.12,6.98,6.98v82.51c0,9.73,7.92,17.65,17.65,17.65h82.51c3.85,0,6.98,3.12,6.98,6.98ZM216.8,52.1v164.11c0,5.46-4.43,9.89-9.89,9.89H42.8c-5.46,0-9.89-4.43-9.89-9.89V52.1c0-5.46,4.43-9.89,9.89-9.89h164.11c5.46,0,9.89,4.43,9.89,9.89ZM176.64,134.16c0-4.32-3.5-7.83-7.83-7.83h-36.13v-36.13c0-4.32-3.51-7.83-7.83-7.83s-7.83,3.5-7.83,7.83v36.13h-36.13c-4.32,0-7.83,3.51-7.83,7.83s3.5,7.83,7.83,7.83h36.13v36.13c0,4.32,3.5,7.83,7.83,7.83s7.83-3.5,7.83-7.83v-36.13h36.13c4.32,0,7.83-3.51,7.83-7.83Z"/>
  </svg>
);

export default AddwtIcon;