
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 md:pt-0 bg-gray-50"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-recpol-blue-dark/5 to-recpol-green/5 z-0"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:pr-6">
            <h1 
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              Soluções em <span className="text-recpol-blue-dark">Reciclagem</span> de Polímeros
            </h1>
            <p className="text-lg text-gray-700">
              Especialistas em gerenciamento, transporte e comercialização de resíduos industriais, 
              com foco na sustentabilidade e no cumprimento das normas ambientais vigentes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#servicos" className="btn-primary flex items-center gap-2">
                Nossos Serviços
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contato" className="btn-accent">
                Entre em Contato
              </a>
            </div>

            <div className="pt-6 flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-recpol-blue-dark">15+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-recpol-blue-dark">100%</div>
                <div className="text-sm text-gray-600">Sustentável</div>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-recpol-blue-dark">ISO</div>
                <div className="text-sm text-gray-600">14001</div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-12 -left-8 w-64 h-64 bg-recpol-green/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-recpol-blue-light/20 rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white shadow-xl rounded-2xl p-1 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611284446314-60a58ac0dae9?q=80&w=1170&auto=format&fit=crop" 
                  alt="Reciclagem de Polímeros" 
                  className="rounded-2xl w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
