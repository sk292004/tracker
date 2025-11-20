export const CATEGORIES = {
  work: { label: 'Work', icon: 'work' },
  leisure: { label: 'Leisure', icon: 'leisure' },
  health: { label: 'Health', icon: 'health' },
  learning: { label: 'Learning', icon: 'learning' },
  chores: { label: 'Chores', icon: 'chores' },
  social: { label: 'Social', icon: 'social' },
  other: { label: 'Other', icon: 'other' },
} as const;

export type Category = keyof typeof CATEGORIES;

export type Activity = {
  id: string;
  name: string;
  startTime: string; // "HH:mm"
  endTime:string; // "HH:mm"
  estimatedDuration?: number; // in minutes
  category: Category;
  date: string; // "YYYY-MM-DD"
};
