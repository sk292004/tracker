'use client';

import { useEffect, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestCategoryAction } from '@/app/actions';

import type { Activity, Category } from '@/lib/types';
import { CATEGORIES } from '@/lib/types';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { PlusIcon } from './icons';

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: 'Activity name must be at least 2 characters.',
    }),
    startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: 'Invalid time format.',
    }),
    endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: 'Invalid time format.',
    }),
    estimatedDuration: z.coerce.number().int().positive().optional(),
    category: z.enum(Object.keys(CATEGORIES) as [Category, ...Category[]]),
  })
  .refine((data) => data.endTime > data.startTime, {
    message: 'End time must be after start time.',
    path: ['endTime'],
  });

type ActivityFormValues = z.infer<typeof formSchema>;

type ActivityFormProps = {
  allActivities: Activity[];
  activityToEdit?: Activity | null;
  onAddActivity?: (activity: Omit<Activity, 'id' | 'date'>) => void;
  onUpdateActivity?: (activity: Activity) => void;
};

export function ActivityForm({
  allActivities,
  activityToEdit,
  onAddActivity,
  onUpdateActivity,
}: ActivityFormProps) {
  const isEditMode = !!activityToEdit;
  const [isSuggesting, startSuggestionTransition] = useTransition();

  const form = useForm<ActivityFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: isEditMode
      ? {
          name: activityToEdit.name,
          startTime: activityToEdit.startTime,
          endTime: activityToEdit.endTime,
          estimatedDuration: activityToEdit.estimatedDuration,
          category: activityToEdit.category,
        }
      : {
          name: '',
          startTime: '',
          endTime: '',
          estimatedDuration: undefined,
          category: 'work',
        },
  });

  const activityName = form.watch('name');

  useEffect(() => {
    if (isEditMode || !activityName || activityName.trim().length < 3) return;

    const handler = setTimeout(() => {
      startSuggestionTransition(async () => {
        const userCategories = [...new Set(allActivities.map((a) => a.category))];
        const suggestion = await suggestCategoryAction(activityName, userCategories);
        if (suggestion && form.getValues('category') !== suggestion) {
          form.setValue('category', suggestion, { shouldValidate: true });
        }
      });
    }, 500);

    return () => clearTimeout(handler);
  }, [activityName, form, allActivities, isEditMode]);

  function onSubmit(values: ActivityFormValues) {
    if (isEditMode && onUpdateActivity && activityToEdit) {
      onUpdateActivity({ ...values, id: activityToEdit.id, date: activityToEdit.date });
    } else if (onAddActivity) {
      onAddActivity(values);
      form.reset({ name: '', startTime: '', endTime: '', estimatedDuration: undefined, category: 'work' });
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Project planning" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="startTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="estimatedDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Duration (minutes)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 60" {...field} value={field.value ?? ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(CATEGORIES).map(([key, { label }]) => (
                            <SelectItem key={key} value={key}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    {isSuggesting && (
                      <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin" />
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {isEditMode ? 'Save Changes' : (
                <>
                  <PlusIcon className="mr-2 h-5 w-5" /> Add Activity
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
