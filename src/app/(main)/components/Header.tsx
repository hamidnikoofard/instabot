import { NavMenu, MobileNav } from '@/app/(main)/components';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border">
      <MobileNav />
      <NavMenu />
    </header>
  );
}

export { Header };
