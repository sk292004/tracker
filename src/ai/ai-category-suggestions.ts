// src/ai/ai-category-suggestions.ts
'use server';
/**
 * @fileOverview Provides AI-powered category suggestions for activities based on user input and past choices.
 *
 * - suggestCategories - A function that suggests categories for a given activity.
 * - CategorySuggestionInput - The input type for the suggestCategories function.
 * - CategorySuggestionOutput - The return type for the suggestCategories function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorySuggestionInputSchema = z.object({
  activityName: z.string().describe('The name of the activity for which to suggest categories.'),
  pastCategories: z
    .array(z.string())
    .describe('An array of categories previously used for similar activities by the user.'),
});
export type CategorySuggestionInput = z.infer<typeof CategorySuggestionInputSchema>;

const CategorySuggestionOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of suggested categories for the activity, ranked by relevance.'),
});
export type CategorySuggestionOutput = z.infer<typeof CategorySuggestionOutputSchema>;

export async function suggestCategories(input: CategorySuggestionInput): Promise<CategorySuggestionOutput> {
  return suggestCategoriesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorySuggestionPrompt',
  input: {schema: CategorySuggestionInputSchema},
  output: {schema: CategorySuggestionOutputSchema},
  prompt: `You are an AI assistant that suggests categories for activities.

  Given the name of an activity and a list of categories the user has used in the past, suggest relevant categories for the activity.
  Prioritize categories that the user has used before for similar activities.

  Activity Name: {{{activityName}}}
  Past Categories: {{#each pastCategories}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Suggestions (ranked by relevance):`,
});

const suggestCategoriesFlow = ai.defineFlow(
  {
    name: 'suggestCategoriesFlow',
    inputSchema: CategorySuggestionInputSchema,
    outputSchema: CategorySuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
