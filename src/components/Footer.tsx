import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> by Ahmed Khaled
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
