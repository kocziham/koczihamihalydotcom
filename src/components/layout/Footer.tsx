export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 h-12 flex items-center justify-between text-sm text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Mihaly Kocziha</span>
      </div>
    </footer>
  );
}
