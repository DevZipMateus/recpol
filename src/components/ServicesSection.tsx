
import { Recycle, Truck, FileSearch, Building, Database, HardDrive, FlaskConical } from 'lucide-react';
import ServiceCard from './cards/ServiceCard';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Recycle,
      title: 'Gerenciamento de Resíduos',
      description: 'Planejamento e gestão, classificação e caracterização, mão de obra especializada, coleta seletiva, locação de equipamentos.'
    },
    {
      icon: Truck,
      title: 'Coleta e Transporte',
      description: 'Realiza a coleta e transporte de resíduos de acordo com as normas de segurança ISO14001, utilizando transporte próprio.'
    },
    {
      icon: FileSearch,
      title: 'Classificação e Caracterização',
      description: 'Identificação e classificação dos resíduos conforme normas ABNT e legislação ambiental vigente.'
    },
    {
      icon: Building,
      title: 'Logística Interna e Externa',
      description: 'Gestão completa do fluxo de materiais dentro e fora das instalações do cliente, otimizando processos.'
    },
    {
      icon: Database,
      title: 'Mão de Obra Especializada',
      description: 'Equipe técnica qualificada para manejo, triagem e separação de resíduos industriais.'
    },
    {
      icon: HardDrive,
      title: 'Frotas e Equipamentos',
      description: 'Frota própria e equipamentos modernos destinados à coleta, triagem e transporte de resíduos.'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gray-50" aria-labelledby="services-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções completas para gestão de resíduos industriais com foco em sustentabilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
            <a href="#contato" className="btn-primary inline-block mb-4 md:mb-0">
              Solicite um Orçamento
            </a>
            <Link 
              to="/laboratorio" 
              className="btn-secondary inline-flex items-center gap-2 mb-4 md:mb-0"
            >
              <FlaskConical className="h-5 w-5" />
              Conheça Nosso Laboratório
            </Link>
            <Link 
              to="/frota" 
              className="btn-accent inline-flex items-center gap-2"
            >
              <Truck className="h-5 w-5" />
              Conheça Nossa Frota
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
