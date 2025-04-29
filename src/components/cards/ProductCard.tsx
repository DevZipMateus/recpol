
import { cn } from '@/lib/utils';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  className?: string;
}

const ProductCard = ({ name, description, image, className }: ProductCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-recpol-blue-dark">{name}</h3>
        <p className="text-gray-700">{description}</p>
        
        <a 
          href="#contato" 
          className="mt-4 inline-block text-recpol-blue-dark font-medium hover:text-recpol-green transition-colors"
        >
          Solicitar informações →
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
