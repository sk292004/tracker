import type { SVGProps } from 'react';
import type { Category } from '@/lib/types';
import {
  BriefcaseIcon,
  GamepadIcon,
  HeartIcon,
  BookIcon,
  BroomIcon,
  SocialIcon,
  TagIcon,
} from '@/components/icons';

const iconMap: Record<Category, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
  work: BriefcaseIcon,
  leisure: GamepadIcon,
  health: HeartIcon,
  learning: BookIcon,
  chores: BroomIcon,
  social: SocialIcon,
  other: TagIcon,
};

type CategoryIconProps = {
  category: Category;
} & SVGProps<SVGSVGElement>;

export function CategoryIcon({ category, ...props }: CategoryIconProps) {
  const IconComponent = iconMap[category] || TagIcon;
  return <IconComponent {...props} />;
}
