import React, { SVGProps, forwardRef } from 'react';

export const ArrowDownIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5893 13.0894C10.2638 13.4149 9.73618 13.4149 9.41074 13.0894L5.24408 8.92275C4.91864 8.59731 4.91864 8.06968 5.24408 7.74424C5.56951 7.4188 6.09715 7.4188 6.42259 7.74424L10 11.3217L13.5774 7.74424C13.9028 7.4188 14.4305 7.4188 14.7559 7.74424C15.0814 8.06968 15.0814 8.59731 14.7559 8.92275L10.5893 13.0894Z"
      fill="#A0ABBB"
    />
  </svg>
));
ArrowDownIcon.displayName = 'ArrowDownIcon';
