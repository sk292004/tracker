'use server';

import {z} from 'zod';
import {ai} from '../genkit';
import {CATEGORIES} from '@/lib/types';

const categoryNames = Object.keys(CATEGORIES) as (keyof typeof CATEGORIES)[];

export const suggestCategoryFlow = ai.defineFlow(
  {
    name: 'suggestCategory',
    inputSchema: z.object({
      activityName: z.string(),
      userCategories: z.array(z.string()).optional(),
    }),
    outputSchema: z.string(),
  },
  async ({activityName, userCategories}) => {
    const userCategoriesPrompt = userCategories?.length
      ? `The user has previously used these categories: ${userCategories.join(
          ', '
        )}. Prioritize suggestions from this list if relevant.`
      : '';

    const {output: suggestion} = await ai.generate({
      prompt: `
      Given the activity name "${activityName}", suggest the most relevant category.
      Available categories are: ${categoryNames.join(', ')}.
      ${userCategoriesPrompt}
      Respond with only the single most relevant category name from the available list. Do not add any other text. For example: work.
    `,
      temperature: 0.1,
    });

    if (suggestion && categoryNames.includes(suggestion.trim().toLowerCase().replace(/['."]/g, '') as any)) {
      return suggestion.trim().toLowerCase().replace(/['."]/g, '');
    }

    // Fallback if the model returns something invalid
    return 'other';
  }
);
