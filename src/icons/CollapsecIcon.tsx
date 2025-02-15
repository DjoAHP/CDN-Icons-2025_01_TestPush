import React from 'react';
import { IconProps } from '../types';

const ExpandcIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
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
    <path id="ahp-icon-collapsec" d="M166.95,166.95h-22.95l-16,81.97-16-81.97h-22.95v-22.95L7.08,128l81.97-16v-22.95h22.95L128,7.08l16,81.97h22.95v22.95l81.97,16-81.97,16v22.95Z"/>
  </svg>
);

export default ExpandcIcon;