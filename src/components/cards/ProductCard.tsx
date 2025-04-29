
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  className?: string;
}

const ProductCard = ({ id, name, description, image, className }: ProductCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <Link to={`/produto/${id}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-recpol-blue-dark">{name}</h3>
        <p className="text-gray-700">{description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <a 
            href="#contato" 
            className="text-recpol-blue-dark font-medium hover:text-recpol-green transition-colors"
          >
            Solicitar informações
          </a>

          <Link to={`/produto/${id}`}>
            <Button variant="outline" className="text-recpol-blue-dark border-recpol-blue-dark hover:bg-recpol-blue-dark/10">
              Saiba mais
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
