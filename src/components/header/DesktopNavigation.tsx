
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuItem } from "./types";

interface DesktopNavigationProps {
  menuItems: MenuItem[];
  scrolled: boolean;
}

const DesktopNavigation = ({ menuItems, scrolled }: DesktopNavigationProps) => {
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex gap-8">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.name}>
            {item.href.startsWith('/#') ? (
              <Link
                to={item.href.replace('/#', '#')}
                className={cn(
                  'text-sm font-medium relative inline-flex items-center transition-colors duration-200',
                  'hover:text-primary focus:text-primary',
                  scrolled ? 'text-gray-800' : 'text-gray-800',
                  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0',
                  'after:bg-primary after:transition-all after:duration-300',
                  'hover:after:w-full focus:after:w-full'
                )}
                onClick={(e) => handleAnchorClick(e, item.href)}
              >
                {item.name}
              </Link>
            ) : (
              <Link
                to={item.href}
                className={cn(
                  'text-sm font-medium relative inline-flex items-center transition-colors duration-200',
                  'hover:text-primary focus:text-primary',
                  scrolled ? 'text-gray-800' : 'text-gray-800',
                  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0',
                  'after:bg-primary after:transition-all after:duration-300',
                  'hover:after:w-full focus:after:w-full'
                )}
              >
                {item.name}
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
