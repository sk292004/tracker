import type { SVGProps } from 'react';

const iconProps: SVGProps<SVGSVGElement> = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  xmlns: "http://www.w3.org/2000/svg",
};

export const BriefcaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

export const GamepadIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...iconProps} {...props}>
        <line x1="6" x2="10" y1="12" y2="12"></line>
        <line x1="8" x2="8" y1="10" y2="14"></line>
        <line x1="15" x2="15.01" y1="13" y2="13"></line>
        <line x1="18" x2="18.01" y1="10" y2="10"></line>
        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.01.15v5.52c0 .049.004.098.01.15A4 4 0 0 0 6.68 18h10.64a4 4 0 0 0 3.978-3.59c.006-.052.01-.101.01-.15v-5.52c0-.049-.004-.098-.01-.15A4 4 0 0 0 17.32 5z"></path>
    </svg>
);

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...iconProps} {...props}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

export const BookIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...iconProps} {...props}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
);

export const BroomIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...iconProps} {...props}>
        <path d="M19.4 11.6 18.2 3.8a.5.5 0 0 0-.8-.4l-1.4.9a.5.5 0 0 0-.2.8L17 11.8c.2.3.6.4 1 .2.4-.2.6-.5.4-.8Z"></path>
        <path d="m14.2 4.4-1.2 6.8c-.1.5.1 1.1.5 1.5s1 .5 1.5.5c.3 0 .7-.1 1-.2L18.4 12c.3-.1.5-.4.4-.8L12.8 4.6a.5.5 0 0 0-.8-.4l-1.4.9a.5.5 0 0 0-.2.8l1.2 6.8"></path><path d="M22 22v-2c-1.3-.9-2.6-1.9-4-3"></path><path d="M14 14c-1.3-.9-2.6-1.9-4-3"></path>
        <path d="m18 18-3.5-2.5"></path>
        <path d="m14 14-3.5-2.5"></path>
        <path d="M4.5 10.5 2 22"></path>
    </svg>
);

export const SocialIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...iconProps} {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

export const TagIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...iconProps} {...props}>
        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.432 0l6.568-6.568a2.426 2.426 0 0 0 0-3.432L12.586 2.586z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </svg>
);

export const EditIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...iconProps} {...props}>
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
);

export const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...iconProps} {...props}>
        <path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
);

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
