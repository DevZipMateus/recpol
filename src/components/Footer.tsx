
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-recpol-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/29982f69-e139-482d-a25a-7ff76b3bbdf4.png" 
                alt="Recpol - Reciclagem de Polímeros" 
                className="h-16 w-auto bg-white p-1 rounded"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Especializada no gerenciamento, transporte e comercialização de resíduos industriais, 
              com foco na sustentabilidade e no cumprimento das normas ambientais vigentes.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white hover:underline transition-colors">Home</a></li>
              <li><a href="#quem-somos" className="hover:text-white hover:underline transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" className="hover:text-white hover:underline transition-colors">Serviços</a></li>
              <li><a href="#produtos" className="hover:text-white hover:underline transition-colors">Produtos</a></li>
              <li><a href="#contato" className="hover:text-white hover:underline transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#servicos" className="hover:text-white hover:underline transition-colors">Gerenciamento de Resíduos</a></li>
              <li><a href="#servicos" className="hover:text-white hover:underline transition-colors">Coleta e Transporte</a></li>
              <li><a href="#servicos" className="hover:text-white hover:underline transition-colors">Classificação e Caracterização</a></li>
              <li><a href="#servicos" className="hover:text-white hover:underline transition-colors">Logística Interna e Externa</a></li>
              <li><a href="#servicos" className="hover:text-white hover:underline transition-colors">Frotas e Equipamentos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-recpol-green flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3 text-white" />
                </div>
                <div>
                  <p>(11) 4055-1340</p>
                  <p>(11) 94744-2886 (WhatsApp)</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-recpol-green flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3 text-white" />
                </div>
                <div>
                  <p>edceia@recpol.ind.br</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-recpol-green flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3 text-white" />
                </div>
                <div>
                  <p>Av. Marginal ao Córrego da Serraria, 209</p>
                  <p>Conceição, Diadema - SP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-gray-300 text-sm text-center">
          <p>&copy; {currentYear} Recpol - Reciclagem de Polímeros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
