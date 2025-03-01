import React from 'react';
import { IconProps } from '../types';

const CloudrIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
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
    <path id="icon-cloudd" d="M187.33,195.87H57.96c-22.75,0-41.26-18.51-41.26-41.26,0-20.25,14.5-37.37,34.48-40.7l14.75-2.46c0-.32,0-.65,0-.97,0-32.38,26.34-58.72,58.72-58.72,25.49,0,48.11,16.77,55.86,40.62,14.54-1.92,29.18,2.35,40.41,11.87,11.68,9.9,18.38,24.35,18.38,39.66,0,28.66-23.32,51.97-51.97,51.97ZM53.2,126.03c-14.03,2.34-24.21,14.36-24.21,28.58,0,15.98,13,28.97,28.97,28.97h129.36c21.88,0,39.69-17.8,39.69-39.69,0-11.69-5.12-22.73-14.04-30.28-8.92-7.56-20.65-10.78-32.18-8.86l-9.54,1.59-1.24-5.73c-4.58-21.19-23.67-36.57-45.37-36.57-25.6,0-46.43,20.83-46.43,46.43,0,1.75.11,3.52.32,5.41l.67,5.81-26.01,4.34Z"/>
  </svg>
);

export default CloudrIcon;