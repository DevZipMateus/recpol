
import { FlaskConical, BadgeCheck, TestTube } from "lucide-react";
import { useEffect, useRef } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Laboratory = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Video Section */}
        <section className="relative w-full h-[70vh] overflow-hidden">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/lovable-uploads/videolab.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-4xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Laboratório Recpol</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Excelência e inovação em análise e controle de qualidade de polímeros
              </p>
            </div>
          </div>
        </section>

        {/* Laboratory Overview */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-recpol-blue-dark">Infraestrutura de Ponta</h2>
                <p className="text-gray-700">
                  A Recpol possui um laboratório próprio equipado com tecnologia de última geração para análise 
                  e caracterização de polímeros. Nossa equipe técnica especializada realiza testes rigorosos para 
                  garantir que todos os materiais atendam aos mais altos padrões de qualidade.
                </p>
                <p className="text-gray-700">
                  Com nosso laboratório interno, conseguimos oferecer:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                    <FlaskConical className="h-6 w-6 text-recpol-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-recpol-blue-dark">Análises Precisas</h3>
                      <p className="text-gray-600 text-sm">Resultados confiáveis e detalhados para cada material</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                    <TestTube className="h-6 w-6 text-recpol-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-recpol-blue-dark">Controle de Processos</h3>
                      <p className="text-gray-600 text-sm">Monitoramento constante de todas as etapas de produção</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                    <BadgeCheck className="h-6 w-6 text-recpol-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-recpol-blue-dark">Garantia de Qualidade</h3>
                      <p className="text-gray-600 text-sm">Certificação de todos os lotes produzidos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                    <FlaskConical className="h-6 w-6 text-recpol-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-recpol-blue-dark">Desenvolvimento</h3>
                      <p className="text-gray-600 text-sm">Pesquisa e criação de soluções personalizadas</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/2774020419465373.jpeg" 
                  alt="Laboratório Recpol" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-gray-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-title">Certificações</h2>
              <p className="section-subtitle">
                Nosso compromisso com a excelência e a sustentabilidade é reconhecido internacionalmente
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 flex flex-col items-center">
                <div className="h-24 w-24 rounded-full bg-recpol-blue-dark/10 flex items-center justify-center mb-6">
                  <BadgeCheck className="h-12 w-12 text-recpol-blue-dark" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">ISO 9001</h3>
                <p className="text-gray-700 text-center mb-6">
                  Certificação internacional que reconhece nosso Sistema de Gestão da Qualidade, 
                  garantindo processos padronizados e produtos de alta qualidade.
                </p>
                <div className="mt-auto w-full h-[500px] bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
                  <iframe 
                    src="/lovable-uploads/ISO 9001:2015.pdf"
                    className="w-full h-full"
                    title="ISO 9001:2015 Certification"
                  />
                  <div className="mt-4 flex justify-center">
                    <a 
                      href="/lovable-uploads/ISO 9001:2015.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      Ver em tela cheia
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 flex flex-col items-center">
                <div className="h-24 w-24 rounded-full bg-recpol-green/10 flex items-center justify-center mb-6">
                  <BadgeCheck className="h-12 w-12 text-recpol-green" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">ISO 14001</h3>
                <p className="text-gray-700 text-center mb-6">
                  Certificação que atesta nosso Sistema de Gestão Ambiental, demonstrando nosso 
                  compromisso com práticas sustentáveis e minimização do impacto ambiental.
                </p>
                <div className="mt-auto w-full h-[500px] bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
                  <iframe 
                    src="/lovable-uploads/ISO 14001:2015.pdf"
                    className="w-full h-full"
                    title="ISO 14001:2015 Certification"
                  />
                  <div className="mt-4 flex justify-center">
                    <a 
                      href="/lovable-uploads/ISO 14001:2015.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      Ver em tela cheia
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Laboratory Media Section */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-title">Galeria do Laboratório</h2>
              <p className="section-subtitle">
                Conheça nossas instalações e equipamentos de alta tecnologia
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64 shadow-md">
                <img 
                  src="/lovable-uploads/668391002837626.jpeg" 
                  alt="Laboratório Recpol" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64 shadow-md">
                <img 
                  src="/lovable-uploads/1221236622680505.jpeg" 
                  alt="Laboratório Recpol" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64 shadow-md">
                <img 
                  src="/lovable-uploads/10034708336581978.jpeg" 
                  alt="Laboratório Recpol" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64 shadow-md">
                <img 
                  src="/lovable-uploads/1783739858916616.jpeg" 
                  alt="Laboratório Recpol" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64 shadow-md">
                <img 
                  src="/lovable-uploads/1651077705546971.jpeg" 
                  alt="Laboratório Recpol" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Vídeos do Nosso Laboratório</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video shadow-md">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                  >
                    <source src="/lovable-uploads/analisadordeunidade.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video shadow-md">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                  >
                    <source src="/lovable-uploads/574513425130506.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-recpol-blue-dark/5">
          <div className="section-container">
            <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-recpol-blue-dark">
                Deseja saber mais sobre nosso laboratório?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Entre em contato conosco para agendar uma visita ou solicitar mais informações sobre 
                nossos processos de análise e controle de qualidade.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#contato" className="btn-primary inline-block">
                  Fale Conosco
                </a>
                <a href="/produtos" className="btn-secondary inline-block">
                  Conheça Nossos Produtos
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Laboratory;
