import type { SVGProps } from 'react';

const iconProps: SVGProps<SVGSVGElement> = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  shapeRendering: "crispEdges",
  className: "pixelated",
};

export const PixelClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M12 3C7.05 3 3 7.05 3 12C3 16.95 7.05 21 12 21C16.95 21 21 16.95 21 12C21 7.05 16.95 3 12 3ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="currentColor"/>
    <path d="M12.5 7H11V13H16V11.5H12.5V7Z" fill="currentColor"/>
  </svg>
);

export const BriefcaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 6H8V5H16V6ZM8 7H6V9H5V18H19V9H18V7H16H8ZM16 8V9H8V8H16Z" fill="currentColor"/>
  </svg>
);

export const GamepadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M18 10H20V12H18V10ZM15 7H17V9H15V7ZM15 13H17V15H15V13ZM4 9H9V7H4V9ZM4 13H9V15H4V13ZM2 10C2 8 4 6 6 6H11V5H6C3 5 1 7 1 10V16C1 19 3 21 6 21H18C21 21 23 19 23 16V10C23 7 21 5 18 5H13V6H18C20 6 22 8 22 10V16C22 18 20 20 18 20H6C4 20 2 18 2 16V10Z" fill="currentColor"/>
  </svg>
);

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"/>
  </svg>
);

export const BookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z" fill="currentColor"/>
  </svg>
);

export const BroomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M15 4H17V6H15V4ZM13 6H15V8H13V6ZM11 8H13V10H11V8ZM9 10H11V12H9V10ZM17 2H15V3H14V4H13V5H12V6H11V7H10V8H9V10H8V12H7V20H9V22H11V20H13V12H14V10H15V8H16V6H17V5H18V4H17V2Z" fill="currentColor"/>
  </svg>
);

export const SocialIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"/>
  </svg>
);

export const TagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.78 11.95 21.41 11.58ZM7 7C6.45 7 6 6.55 6 6C6 5.45 6.45 5 7 5C7.55 5 8 5.45 8 6C8 6.55 7.55 7 7 7Z" fill="currentColor"/>
  </svg>
);

export const EditIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...iconProps} {...props}>
        <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor"/>
    </svg>
);

export const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...iconProps} {...props}>
        <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="currentColor" />
    </svg>
);

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
  </svg>
);
