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
    <polygon id="ahp-icon-expandc" points="240.89 86.5 240.89 15.11 169.5 15.11 189.83 35.44 128 127.27 66.17 35.44 86.5 15.11 15.11 15.11 15.11 86.5 35.44 66.17 127.27 128 35.44 189.83 15.11 169.5 15.11 240.89 86.5 240.89 66.17 220.56 128 128.73 189.83 220.56 169.5 240.89 240.89 240.89 240.89 169.5 220.56 189.83 128.73 128 220.56 66.17 240.89 86.5"/>
  </svg>
);

export default ExpandcIcon;