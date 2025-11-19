'use client';

import { useState, useEffect, useMemo } from 'react';
import type { Activity } from '@/lib/types';
import { ActivityForm } from '@/components/activity-form';
import { ActivityList } from '@/components/activity-list';
import { AppHeader } from '@/components/header';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(
    null
  );

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  useEffect(() => {
    try {
      const savedActivities = localStorage.getItem(
        'pixel-time-tracker-activities'
      );
      if (savedActivities) {
        setActivities(JSON.parse(savedActivities));
      }
    } catch (error) {
      console.error('Failed to load activities from localStorage', error);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem(
          'pixel-time-tracker-activities',
          JSON.stringify(activities)
        );
      } catch (error) {
        console.error('Failed to save activities to localStorage', error);
      }
    }
  }, [activities, isMounted]);

  const handleAddActivity = (newActivity: Omit<Activity, 'id' | 'date'>) => {
    setActivities((prev) => [
      ...prev,
      { ...newActivity, id: crypto.randomUUID(), date: today },
    ]);
  };

  const handleUpdateActivity = (updatedActivity: Activity) => {
    setActivities((prev) =>
      prev.map((act) =>
        act.id === updatedActivity.id ? updatedActivity : act
      )
    );
    setEditingActivity(null);
  };

  const handleDeleteActivity = (id: string) => {
    setActivities((prev) => prev.filter((act) => act.id !== id));
  };

  const todaysActivities = useMemo(
    () =>
      activities
        .filter((act) => act.date === today)
        .sort((a, b) => a.startTime.localeCompare(b.startTime)),
    [activities, today]
  );

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="mx-auto max-w-2xl space-y-8">
          <header className="flex items-center justify-center space-x-4 py-4">
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-8 w-64" />
          </header>
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-10 w-full mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                 <Skeleton className="h-10 w-full" />
                 <Skeleton className="h-10 w-full" />
              </div>
               <Skeleton className="h-10 w-full mb-4" />
               <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-background p-4 md:p-8">
        <div className="mx-auto max-w-2xl space-y-8">
          <AppHeader />
          <ActivityForm onAddActivity={handleAddActivity} allActivities={activities} />
          <ActivityList
            activities={todaysActivities}
            onEdit={setEditingActivity}
            onDelete={handleDeleteActivity}
          />
        </div>
      </main>

      <Dialog
        open={editingActivity !== null}
        onOpenChange={(isOpen) => !isOpen && setEditingActivity(null)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Activity</DialogTitle>
            <DialogDescription>
              Make changes to your activity here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          {editingActivity && (
            <ActivityForm
              activityToEdit={editingActivity}
              onUpdateActivity={handleUpdateActivity}
              allActivities={activities}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
