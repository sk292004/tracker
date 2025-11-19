'use client';

import type { Activity } from '@/lib/types';
import { CATEGORIES } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CategoryIcon } from './category-icon';
import { EditIcon, DeleteIcon } from './icons';

type ActivityListProps = {
  activities: Activity[];
  onEdit: (activity: Activity) => void;
  onDelete: (id: string) => void;
};

export function ActivityList({
  activities,
  onEdit,
  onDelete,
}: ActivityListProps) {
  if (activities.length === 0) {
    return (
      <Card className="text-center">
        <CardHeader>
          <CardTitle>Daily Log</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            No activities logged for today. Add one to get started!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Log</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={activity.id}>
              <div className="flex items-center space-x-4 p-2 rounded-md transition-colors hover:bg-accent">
                <div className="flex flex-col items-center justify-center font-mono text-sm text-muted-foreground w-16">
                  <span>{activity.startTime}</span>
                  <span>-</span>
                  <span>{activity.endTime}</span>
                </div>
                <CategoryIcon
                  category={activity.category}
                  className="h-8 w-8 text-foreground"
                />
                <div className="flex-1">
                  <p className="font-semibold">{activity.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {CATEGORIES[activity.category].label}
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(activity)}
                    aria-label={`Edit ${activity.name}`}
                  >
                    <EditIcon className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(activity.id)}
                    aria-label={`Delete ${activity.name}`}
                    className="hover:bg-destructive/20 hover:text-destructive"
                  >
                    <DeleteIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              {index < activities.length - 1 && <Separator className="mt-4" />}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
