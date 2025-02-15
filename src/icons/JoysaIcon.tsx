import React from 'react';
import { IconProps } from '../types';

const JoysaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
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
    <path id="ahp-icon-joys01" d="M184.56,59.24h-113.12C33.47,59.24,2.68,90.03,2.68,128h0c0,37.97,30.78,68.76,68.76,68.76h113.12c37.97,0,68.76-30.78,68.76-68.76h0c0-37.97-30.78-68.76-68.76-68.76ZM116.34,138.28h-25.37v25.37h-23.5v-25.37h-25.37v-23.5h25.37v-25.37h23.5v25.37h25.37v23.5ZM157.62,163.65c-10.68,0-19.34-8.66-19.34-19.34s8.66-19.34,19.34-19.34,19.34,8.66,19.34,19.34-8.66,19.34-19.34,19.34ZM193.18,128.09c-10.68,0-19.34-8.66-19.34-19.34s8.66-19.34,19.34-19.34,19.34,8.66,19.34,19.34-8.66,19.34-19.34,19.34Z"/>
  </svg>
);

export default JoysaIcon;