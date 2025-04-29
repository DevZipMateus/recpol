
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/808f7fc8-280a-4cfd-b75d-36bc39bdd105.png" 
        alt="Recpol - Reciclagem de Polímeros" 
        className={cn(
          "h-auto w-auto transition-all duration-300",
          scrolled ? "max-h-10" : "max-h-12",
          "hover:scale-105"
        )}
      />
    </Link>
  );
};

export default Logo;
