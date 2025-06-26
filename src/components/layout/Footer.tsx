import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  return (
    <footer className="py-4 px-4 border-t bg-background shrink-0">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <nav className="flex justify-center gap-4 sm:gap-6">
          <Link to="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;