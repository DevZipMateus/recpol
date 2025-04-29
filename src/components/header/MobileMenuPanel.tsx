
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MenuItem } from "./types";
import { Link } from "react-router-dom";

interface MobileMenuPanelProps {
  isMenuOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const MobileMenuPanel = ({ isMenuOpen, onClose, menuItems }: MobileMenuPanelProps) => {
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onClose(); // Close menu first
    
    // If it's an anchor link to the current page
    if (href.startsWith('/#')) {
      event.preventDefault();
      const targetId = href.substring(2); // Remove the '/#' part
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      } else {
        // If the element doesn't exist on this page, navigate to home with the anchor
        window.location.href = href;
      }
    }
    // For regular links, let the Link component handle it
  };

  return (
    <div 
      className={cn(
        'fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-white shadow-xl',
        'transform transition-transform duration-300 ease-in-out md:hidden',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {/* Menu Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/29982f69-e139-482d-a25a-7ff76b3bbdf4.png" 
              alt="Recpol - Reciclagem de Polímeros" 
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
          aria-label="Fechar menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="px-6 pt-8 pb-8 overflow-y-auto h-[calc(100%-82px)]">
        <ul className="space-y-5">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.href.startsWith('/#') ? (
                <Link
                  to={item.href.replace('/#', '#')}
                  className="text-xl font-medium text-recpol-blue-dark hover:text-recpol-green transition-all duration-200 block py-2 
                             hover:translate-x-1 hover:scale-[1.02] focus:outline-none focus:text-recpol-blue-dark"
                  onClick={(e) => handleAnchorClick(e, item.href)}
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  to={item.href}
                  className="text-xl font-medium text-recpol-blue-dark hover:text-recpol-green transition-all duration-200 block py-2 
                             hover:translate-x-1 hover:scale-[1.02] focus:outline-none focus:text-recpol-blue-dark"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-md text-gray-500 mb-3">Entre em contato conosco</p>
          <a 
            href="tel:+551140551340" 
            className="text-xl text-recpol-blue-dark hover:text-recpol-green font-medium block py-2
                       transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
          >
            (11) 4055-1340
          </a>
          <a 
            href="https://wa.me/5511947442886" 
            className="text-xl text-recpol-blue-dark hover:text-recpol-green font-medium block py-2
                       transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
          >
            (11) 94744-2886 (WhatsApp)
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenuPanel;
