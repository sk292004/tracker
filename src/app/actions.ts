'use server';

import { run } from 'genkit';
import { suggestCategoryFlow } from '@/ai/flows/suggestCategory';
import type { Category } from '@/lib/types';

export async function suggestCategoryAction(
  activityName: string,
  userCategories: string[]
): Promise<Category | null> {
  if (!activityName || activityName.trim().length < 3) {
    return null;
  }
  try {
    const suggestion = await run(suggestCategoryFlow, {
      activityName,
      userCategories,
    });
    return suggestion as Category;
  } catch (error) {
    console.error('Error suggesting category:', error);
    // Return null or a default category on error
    return null;
  }
}
