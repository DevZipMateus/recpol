
import { BadgeCheck } from "lucide-react";

type CertificationCardProps = {
  title: string;
  description: string;
  pdfSrc: string;
  iconColor: string;
}

const CertificationCard = ({ title, description, pdfSrc, iconColor }: CertificationCardProps) => {
  return (
    <div className="glass-card p-8 flex flex-col items-center">
      <div className={`h-24 w-24 rounded-full bg-${iconColor}/10 flex items-center justify-center mb-6`}>
        <BadgeCheck className={`h-12 w-12 text-${iconColor}`} />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gray-700 text-center mb-6">
        {description}
      </p>
      <div className="mt-auto w-full h-[500px] bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
        <iframe 
          src={pdfSrc}
          className="w-full h-full"
          title={`${title} Certification`}
        />
        <div className="mt-4 flex justify-center">
          <a 
            href={pdfSrc}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Ver em tela cheia
          </a>
        </div>
      </div>
    </div>
  );
};

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Certificações</h2>
          <p className="section-subtitle">
            Nosso compromisso com a excelência e a sustentabilidade é reconhecido internacionalmente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CertificationCard 
            title="ISO 9001"
            description="Certificação internacional que reconhece nosso Sistema de Gestão da Qualidade, garantindo processos padronizados e produtos de alta qualidade."
            pdfSrc="/lovable-uploads/ISO 9001:2015.pdf"
            iconColor="recpol-blue-dark"
          />
          
          <CertificationCard 
            title="ISO 14001"
            description="Certificação que atesta nosso Sistema de Gestão Ambiental, demonstrando nosso compromisso com práticas sustentáveis e minimização do impacto ambiental."
            pdfSrc="/lovable-uploads/ISO 14001:2015.pdf"
            iconColor="recpol-green"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
