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
    <path id="ahp-icon-collapsea" d="M227.48,245.07l-27.47-27.47-26.74-26.74v41.04h-24.86v-83.49s83.49,0,83.49,0v24.86s-41.04,0-41.04,0l26.74,26.74,27.47,27.47-17.58,17.58ZM10.94,28.52l27.47,27.47,26.74,26.74H24.11s0,24.87,0,24.87h83.49s0-83.49,0-83.49h-24.86v41.04s-26.75-26.74-26.75-26.74L28.52,10.93,10.94,28.52ZM227.48,10.94l-27.47,27.47-26.74,26.74V24.11s-24.87,0-24.87,0v83.49s83.49,0,83.49,0v-24.86h-41.04s26.74-26.75,26.74-26.75l27.47-27.47-17.58-17.58ZM28.52,245.06l27.47-27.47,26.74-26.74v41.04s24.87,0,24.87,0v-83.49s-83.49,0-83.49,0v24.86h41.04s-26.74,26.75-26.74,26.75l-27.47,27.47,17.58,17.58Z"/>
  </svg>
);

export default SouriebIcon;