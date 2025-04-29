
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/29982f69-e139-482d-a25a-7ff76b3bbdf4.png" 
        alt="Recpol - Reciclagem de Polímeros" 
        className={cn(
          "h-10 w-auto transition-all duration-300",
          scrolled ? "h-10" : "h-12",
          "hover:scale-105"
        )}
      />
    </a>
  );
};

export default Logo;
