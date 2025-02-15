import React from 'react';
import { IconProps } from '../types';

const TerreaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
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
    <path id="icon-terre01" d="M128,16.06c-61.72,0-111.94,50.22-111.94,111.94s50.22,111.94,111.94,111.94,111.94-50.22,111.94-111.94S189.72,16.06,128,16.06ZM201.04,68.96c-3.37-.27-6.66-.24-9.39.36-.03,0-.05.01-.08.02.19-.64.33-1.28.41-1.93.28-2.21-.16-5.43-.97-9.04,3.61,3.27,6.96,6.81,10.02,10.6ZM73.56,51.46c-.02,3.99.56,8.02,2.23,11.47,3.33,6.88,10.48,8.23,17.85,7.89-4.62,3.62-7.56,6.61-8.61,10-.86,2.75-1.07,5.65-1.28,8.45-.28,3.85-.55,7.49-2.32,9.07-3.3,2.94-10.43,7.46-21.07,4.63-1.27-.34-2.61-.9-3.97-1.59-.05-.03-.11-.06-.16-.08-5.03-2.59-10.42-7.15-14.33-10.88,6.87-15.67,17.89-29.12,31.66-38.95ZM34.04,128c0-7.73.94-15.24,2.71-22.43,2.93,2.47,6.29,5.01,9.83,7.15,1.4,6.2,4.94,17.7,12.71,22.96,3.76,2.55,6.15,4.88,7.79,11.12.02.1.05.2.08.3.54,2.15,1,4.76,1.4,7.98,1.78,14.35,15.51,26.46,25.54,35.31,1.61,1.42,3.12,2.75,4.41,3.94,2.41,2.23,3.27,12.37,2.34,23.62-38.61-11.68-66.81-47.58-66.81-89.96ZM115.05,197.8c-1.02-5.78-3-10.96-6.55-14.26-1.42-1.31-3-2.71-4.67-4.18-7.8-6.88-19.58-17.27-20.67-26.08-.15-1.19-.31-2.33-.49-3.43,7.66-2.85,19.89-7.5,26.34-10.44,3.71,3.89,10.42,14.14,12.85,17.84.93,1.42,2.05,2.79,3.23,4.24,4.97,6.09,6.82,9.36,5.05,13.31l-15.08,23.01ZM128,221.96c-3.65,0-7.25-.22-10.79-.62l25.74-39.28.2-.4c6.55-13.26-2.06-23.8-6.68-29.47-.93-1.14-1.82-2.22-2.32-3-4.17-6.37-8.54-12.88-12.27-17.36-2.33-2.8-9.42-11.32-17.11-6.72-2.27,1.36-14.11,6.04-26.23,10.57-2.48-5.01-5.99-8.77-11.01-12.18-1.31-.89-2.55-2.79-3.62-5.08,1,.08,1.99.13,2.98.13,8.99,0,17.5-3.17,24.31-9.24,6.22-5.54,6.79-13.3,7.2-18.97.13-1.7.25-3.46.52-4.64,1.5-1.79,6.8-5.62,10.04-7.95,9.22-6.65,14.29-10.31,13.5-16.42-.39-3.04-2.41-5.54-5.4-6.69-3.84-1.47-8.66-.69-14.76.3-3.64.59-10.99,1.79-13.53,1-1.09-3.09-.38-8.81.8-13.69,1.72-.77,3.47-1.49,5.24-2.16,1.03,1.89,2.98,2.99,5.02,2.99.86,0,1.74-.2,2.57-.61,2.18-1.1,3.35-3.41,3.11-5.7,7.21-1.78,14.73-2.72,22.48-2.72,16.52,0,32.05,4.29,45.56,11.81,1.34,3.77,2.59,7.59,3.55,10.91-.17.09-.34.18-.51.27-3.71,2.14-5.57,5.89-4.14,8.36.95,1.65,3.13,2.31,5.58,1.94-1.32,1.8-3.54,4.2-4.79,5.55-4.19,4.52-7.51,8.1-6.19,12.79.7,2.47,2.65,4.38,5.23,5.11.91.26,1.8.37,2.66.37,3.9,0,7.39-2.32,10.8-4.57,2.71-1.8,5.79-3.84,8.7-4.47,3.39-.74,10.42.35,16.49,1.77,1.63,3.05,3.1,6.2,4.39,9.44l-8.42,6.12c-1.12.82-2.67.78-3.75-.09l-6.76-5.44c-5.94-4.78-14.27-5.29-20.73-1.26-19.24,12-21.42,16.77-22.36,18.81-3.78,8.24-3.33,21.07,3.35,27.03,2.34,2.09,5,4.46,33.4,2.72,1.91,2.84,4.38,10.48,4.64,14.07l3.4,35.26c-17.22,19.29-42.26,31.46-70.09,31.46ZM211.07,171.87l-1.72-17.87h0c-.31-2.37-4.13-28.53-18.31-27.62-14.52.94-21.96.74-24.9.37-.68-1.92-.89-5.94.49-9.08.33-.48,3.07-4,16.83-12.58,1.16-.72,2.65-.63,3.73.24l6.76,5.44c6.24,5.03,15.14,5.25,21.62.54l4.31-3.13c1.38,6.39,2.11,13.02,2.11,19.81,0,15.84-3.94,30.77-10.89,43.87Z"/>
  </svg>
);

export default TerreaIcon;