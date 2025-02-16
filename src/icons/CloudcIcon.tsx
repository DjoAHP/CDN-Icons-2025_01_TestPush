import React from 'react';
import { IconProps } from '../types';

const CloudcIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
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
    <path id="icon-cloud-cercle" d="M202.84,139.43h0c0,13.8-11.19,24.99-24.99,24.99h-92.06c-18.01,0-32.62-14.6-32.62-32.62h0c0-20.16,18.1-35.49,37.98-32.17l2.68.45c3.64-16.85,18.63-29.48,36.57-29.48,20.67,0,37.42,16.75,37.42,37.42,0,1.47-.09,2.92-.26,4.35l14.41,2.4c12.05,2.01,20.88,12.44,20.88,24.65ZM234.25,128c0-58.59-47.66-106.25-106.25-106.25S21.75,69.41,21.75,128s47.66,106.25,106.25,106.25,106.25-47.66,106.25-106.25ZM218.44,128c0,49.87-40.57,90.44-90.44,90.44s-90.44-40.57-90.44-90.44,40.57-90.44,90.44-90.44,90.44,40.57,90.44,90.44Z"/>
  </svg>
);

export default CloudcIcon;