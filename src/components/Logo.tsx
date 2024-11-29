import { BookOpen } from 'lucide-react';

export function Logo() {
  return (
    <a 
      href="https://www.uninunez.edu.co/"
      className="flex items-center gap-2 text-secondary hover:text-secondary-dark transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BookOpen className="w-10 h-10 animate-pulse" />
      <span className="font-semibold text-xl">UniNúñez</span>
    </a>
  );
}