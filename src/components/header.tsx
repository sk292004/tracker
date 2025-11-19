import { PixelClockIcon } from './icons';

export function AppHeader() {
  return (
    <header className="flex items-center justify-center space-x-3 py-4 text-foreground">
      <PixelClockIcon className="h-10 w-10" />
      <h1 className="text-3xl font-bold tracking-tight font-headline">
        Pixel Time Tracker
      </h1>
    </header>
  );
}
