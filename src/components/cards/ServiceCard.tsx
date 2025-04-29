
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, description, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100",
        className
      )}
    >
      <div className="w-14 h-14 rounded-lg bg-recpol-blue-dark/10 flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-recpol-blue-dark" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-recpol-blue-dark">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
