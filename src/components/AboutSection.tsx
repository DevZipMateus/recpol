import { CheckCircle } from 'lucide-react';
const AboutSection = () => {
  const features = ['Especialistas em gestão de resíduos industriais', 'Conformidade com normas ambientais', 'Soluções sustentáveis', 'Equipe técnica especializada', 'Tecnologia avançada', 'Logística integrada'];
  return <section id="quem-somos" className="py-24 bg-white" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 id="about-heading" className="section-title">Quem Somos</h2>
          <p className="section-subtitle">
            Conheça a Recpol e nossa missão com a sustentabilidade e o meio ambiente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img alt="Recpol - Compromisso com a sustentabilidade" className="w-full h-auto object-cover" loading="lazy" src="/lovable-uploads/eac15d20-e636-45f9-ac23-37b89fe622a4.jpg" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-recpol-blue-light/10 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-recpol-green/10 rounded-full z-0"></div>
          </div>
          
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-recpol-blue-dark/10 text-recpol-blue-dark rounded-full">
              Nossa História
            </span>
            <h3 className="text-3xl font-bold">Compromisso com o Meio Ambiente</h3>
            <p className="text-gray-700">
              A Recpol é uma empresa especializada no gerenciamento, transporte e comercialização 
              de resíduos industriais, com foco na sustentabilidade e no cumprimento das normas 
              ambientais vigentes.
            </p>
            <p className="text-gray-700">
              Oferecemos soluções que envolvem a coleta, triagem, classificação e destinação 
              adequada dos materiais, sempre em conformidade com as leis ambientais, contribuindo 
              para um futuro mais sustentável.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map(feature => <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-recpol-green flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>)}
            </div>
            
            <a href="#servicos" className="btn-primary inline-block mt-4">
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;