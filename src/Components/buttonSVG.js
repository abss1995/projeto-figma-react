import React from "react";
import "./button.css"

const SVGbutton = (props) => (
  <svg width={56} height={61} viewBox="0 0 56 61" fill="none" {...props}>
    <circle cx={25.5} cy={30.5} r={30.5} fill="#FAFAFA" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 33.9761C15 33.5532 15.4477 33.2104 16 33.2104H34C34.5523 33.2104 35 33.5532 35 33.9761C35 34.3989 34.5523 34.7417 34 34.7417H16C15.4477 34.7417 15 34.3989 15 33.9761Z"
      fill="#333333"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 24.7882C15 24.3653 15.4477 24.0225 16 24.0225H34C34.5523 24.0225 35 24.3653 35 24.7882C35 25.211 34.5523 25.5538 34 25.5538H16C15.4477 25.5538 15 25.211 15 24.7882Z"
      fill="#333333"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 29.3821C15 28.9593 15.4477 28.6165 16 28.6165H34C34.5523 28.6165 35 28.9593 35 29.3821C35 29.805 34.5523 30.1478 34 30.1478H16C15.4477 30.1478 15 29.805 15 29.3821Z"
      fill="#333333"
    />
  </svg>
);

export default SVGbutton;
