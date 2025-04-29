
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './header/Logo';
import MobileMenuButton from './header/MobileMenuButton';
import DesktopNavigation from './header/DesktopNavigation';
import MobileMenuPanel from './header/MobileMenuPanel';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Produtos", href: "#produtos" },
    { name: "Contato", href: "#contato" },
  ];

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
        <Logo scrolled={scrolled} />

        {/* Desktop Menu */}
        <DesktopNavigation menuItems={menuItems} scrolled={scrolled} />

        {/* Mobile Menu Button */}
        <MobileMenuButton 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          scrolled={scrolled}
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenuPanel
        isMenuOpen={isMenuOpen}
        onClose={toggleMenu}
        menuItems={menuItems}
      />
    </header>
  );
};

export default Header;
