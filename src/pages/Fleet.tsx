
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FlaskConical, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Fleet = () => {
  const images = [
    "/lovable-uploads/1561957924762259.jpeg",
    "/lovable-uploads/1111390690726899.jpeg",
    "/lovable-uploads/1345178100081422.jpeg",
    "/lovable-uploads/1234124811659090.jpeg",
    "/lovable-uploads/1355489138994886.jpeg",
    "/lovable-uploads/1246277130401803.jpeg",
    "/lovable-uploads/1207847374351891.jpeg",
    "/lovable-uploads/728818679567855.jpeg",
    "/lovable-uploads/678622931724642.jpeg"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-recpol-blue-dark/5 py-16 md:py-24">
          <div className="section-container">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-recpol-blue-dark">
                  Frota Própria
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  A segurança no transporte de resíduos é fundamental para evitar riscos ambientais. 
                  A Recpol oferece um transporte especializado com veículos modernos e seguros, 
                  com frota própria de veículos licenciados e profissionais treinados para 
                  manuseio e transporte de resíduos industriais.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Garantimos que todo o processo esteja em conformidade com as regulamentações legais, 
                  proporcionando um serviço transparente e confiável de acordo com a ISO14001.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#contato" className="btn-primary inline-flex items-center gap-2">
                    Solicite um Orçamento
                  </Link>
                  <Link to="/laboratorio" className="btn-secondary inline-flex items-center gap-2">
                    <FlaskConical className="h-5 w-5" />
                    Conheça Nosso Laboratório
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <video 
                    className="w-full h-auto rounded-lg shadow-lg max-w-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                    muted
                    webkit-playsinline="true"
                    style={{ maxHeight: '70vh' }}
                    onError={(e) => {
                      console.log('Erro ao carregar vídeo:', e);
                      e.currentTarget.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.innerHTML = '<p class="text-center text-gray-500 p-8 border-2 border-dashed border-gray-300 rounded-lg">Vídeo não disponível no momento. Entre em contato conosco para mais informações.</p>';
                      e.currentTarget.parentNode?.appendChild(fallback);
                    }}
                  >
                    <source src="/lovable-uploads/1859112114662338.mp4" type="video/mp4" />
                    <p className="text-center text-gray-500 p-8 border-2 border-dashed border-gray-300 rounded-lg">
                      Seu navegador não suporta a reprodução de vídeo. 
                      <br />
                      <a href="/lovable-uploads/1859112114662338.mp4" className="text-recpol-blue-dark underline" target="_blank" rel="noopener noreferrer">
                        Clique aqui para baixar o vídeo
                      </a>
                    </p>
                  </video>
                  <div className="absolute -bottom-4 -right-4 bg-recpol-blue-dark text-white p-4 rounded-lg shadow-lg">
                    <Truck className="h-8 w-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Gallery Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <h2 className="section-title">Nossa Frota</h2>
            <p className="section-subtitle">
              Veículos modernos e equipados para o transporte seguro de resíduos industriais
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <img 
                    src={img} 
                    alt={`Veículo da frota Recpol ${index + 1}`} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-recpol-blue-dark/5">
          <div className="section-container">
            <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-recpol-blue-dark">
                Precisa de transporte seguro para seus resíduos?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Entre em contato conosco para saber mais sobre nossa frota de veículos e
                como podemos ajudar sua empresa a transportar resíduos com segurança e conformidade.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/#contato" className="btn-primary inline-block">
                  Fale Conosco
                </Link>
                <Link to="/#produtos" className="btn-secondary inline-block">
                  Conheça Nossos Produtos
                </Link>
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

export default Fleet;
