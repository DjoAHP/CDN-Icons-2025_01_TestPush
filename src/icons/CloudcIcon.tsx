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
    <path d="M245.4 48.8H26.5c-3.3 0-6 2.7-6 6L4.6 201.2c0 3.3 2.7 6 6 6h218.9c3.3 0 6-2.7 6-6l15.9-146.4c0-3.3-2.7-6-6-6M52.9 176.5c-2.7 0-5.4-1-7.5-3.1-4.1-4.1-4.1-10.8 0-15L71.8 132l-26.4-26.4c-4.1-4.1-4.1-10.8 0-15 4.1-4.1 10.8-4.1 15 0l41.4 41.4-41.4 41.4c-2.1 2.1-4.8 3.1-7.5 3.1m133.7 2.5h-75.3c-5.8 0-10.6-4.7-10.6-10.6s4.7-10.6 10.6-10.6h75.3c5.8 0 10.6 4.7 10.6 10.6s-4.7 10.6-10.6 10.6"/>
  </svg>
);

export default CloudcIcon;