
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#home" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/808f7fc8-280a-4cfd-b75d-36bc39bdd105.png" 
        alt="Recpol - Reciclagem de Polímeros" 
        className={cn(
          "h-auto w-auto transition-all duration-300",
          scrolled ? "max-h-10" : "max-h-12",
          "hover:scale-105"
        )}
      />
    </a>
  );
};

export default Logo;
