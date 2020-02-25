import React from 'react';

const Arrow = ({ className }: { className: string }) => (
  <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M15 8L9.41421 2.41421C8.63317 1.63316 7.36684 1.63316 6.58579 2.41421L1 8"
      stroke="white"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default Arrow;
