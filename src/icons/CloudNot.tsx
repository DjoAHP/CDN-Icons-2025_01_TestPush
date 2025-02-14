import React from 'react';
import { IconProps } from '../types';

const CloudNot: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
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
    <path id="icon-cloud-not" d="M162.23,195.18h-93.56c-28.66,0-51.98-23.32-51.98-51.97,0-13.15,4.91-25.68,13.82-35.3,8.75-9.44,20.57-15.29,33.29-16.47,3.38-.32,6.37,2.17,6.69,5.55.31,3.38-2.17,6.37-5.55,6.69-20.5,1.9-35.96,18.89-35.96,39.53,0,21.88,17.8,39.69,39.69,39.69h93.56c3.39,0,6.14,2.75,6.14,6.14s-2.75,6.14-6.14,6.14ZM226.12,184.15c8.38-7.79,13.19-18.81,13.19-30.24,0-20.25-14.5-37.37-34.48-40.7l-14.75-2.46c0-.32,0-.65,0-.97,0-32.38-26.34-58.72-58.72-58.72-12.06,0-23.64,3.63-33.5,10.49-2.79,1.94-3.47,5.77-1.53,8.55,1.94,2.79,5.77,3.47,8.55,1.53,7.79-5.42,16.95-8.29,26.48-8.29,25.6,0,46.43,20.83,46.43,46.43,0,1.73-.11,3.55-.33,5.41l-.67,5.81,26.01,4.34c14.03,2.34,24.21,14.36,24.21,28.58,0,8.15-3.29,15.69-9.26,21.24-2.49,2.31-2.63,6.2-.32,8.68,1.21,1.3,2.85,1.96,4.5,1.96,1.5,0,3-.54,4.18-1.64ZM218.13,212.75c2.4-2.4,2.4-6.29,0-8.69L63,48.93c-2.4-2.4-6.29-2.4-8.69,0-2.4,2.4-2.4,6.29,0,8.69l155.13,155.13c1.2,1.2,2.77,1.8,4.34,1.8s3.15-.6,4.34-1.8Z"/>
  </svg>
);

export default CloudNot;