import React from 'react';

const WaveDivider = () => {
  return (
    <svg className="editorial"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 24 150 28"
         preserveAspectRatio="none">
      <defs>
        <path id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
      </defs>
      <g className="parallax1">
        <use xlinkHref="#gentle-wave" x="50" y="3" fill="#e055f2"/>
      </g>
      <g className="parallax2">
        <use xlinkHref="#gentle-wave" x="50" y="0" fill="#5500ff"/>
      </g>
      <g className="parallax3">
        <use xlinkHref="#gentle-wave" x="50" y="9" fill="#3461c1"/>
      </g>
      <g className="parallax4">
        <use xlinkHref="#gentle-wave" x="50" y="6" fill="#010B21"/>  
      </g>
    </svg>
  );
};

export default WaveDivider;
