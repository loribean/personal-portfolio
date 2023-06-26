import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="A" transform="translate(31.000000, 33.000000)">
          <path
            fill="currentColor"
            d="M 10, 30
            L 20, 5
            L 30, 30
            L 26, 30
            L 24, 26
            L 16, 26
            L 14, 30 z"
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
