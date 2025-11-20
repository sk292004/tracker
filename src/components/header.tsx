import { TimerIcon } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="flex items-center justify-center space-x-3 py-4 text-foreground">
      <TimerIcon className="h-10 w-10" />
      <h1
        className="text-3xl font-bold tracking-tight font-headline relative"
        style={{
          textShadow: '2px 2px 0px hsl(var(--border))',
        }}
      >
        Time Tracker
      </h1>
    </header>
  );
}
