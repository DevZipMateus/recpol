
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Fechar menu quando a tela for redimensionada
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Impedir rolagem quando o menu está aberto no mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-white py-4'
      )}
      role="banner"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="relative z-20 flex items-center">
          <img 
            src="/lovable-uploads/29982f69-e139-482d-a25a-7ff76b3bbdf4.png" 
            alt="Recpol - Reciclagem de Polímeros" 
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8" aria-label="Menu de navegação principal">
          <a 
            href="#home" 
            className="text-recpol-blue-dark font-medium hover:text-recpol-green transition-colors"
          >
            Home
          </a>
          <a 
            href="#quem-somos" 
            className="text-recpol-blue-dark font-medium hover:text-recpol-green transition-colors"
          >
            Quem Somos
          </a>
          <a 
            href="#servicos" 
            className="text-recpol-blue-dark font-medium hover:text-recpol-green transition-colors"
          >
            Serviços
          </a>
          <a 
            href="#produtos" 
            className="text-recpol-blue-dark font-medium hover:text-recpol-green transition-colors"
          >
            Produtos
          </a>
          <a 
            href="#contato" 
            className="text-recpol-blue-dark font-medium hover:text-recpol-green transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className={cn(
            "md:hidden relative z-20 flex items-center justify-center p-2 rounded-full",
            "focus:outline-none transition-all duration-200",
            scrolled ? "text-recpol-blue-dark" : "text-recpol-blue-dark"
          )}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={cn(
          'fixed inset-0 z-10 bg-white transform transition-transform duration-300 ease-in-out pt-24',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-6">
          <a 
            href="#home" 
            className="text-xl text-recpol-blue-dark font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a 
            href="#quem-somos" 
            className="text-xl text-recpol-blue-dark font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Quem Somos
          </a>
          <a 
            href="#servicos" 
            className="text-xl text-recpol-blue-dark font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Serviços
          </a>
          <a 
            href="#produtos" 
            className="text-xl text-recpol-blue-dark font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Produtos
          </a>
          <a 
            href="#contato" 
            className="text-xl text-recpol-blue-dark font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
