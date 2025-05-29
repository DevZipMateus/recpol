
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const features = [
    'Especialistas em reciclagem de polímeros',
    'Conformidade com normas ambientais',
    'Soluções sustentáveis',
    'Equipe técnica especializada',
    'Tecnologia avançada',
    'Logística integrada'
  ];

  return (
    <section id="quem-somos" className="py-24 bg-white" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 id="about-heading" className="section-title">Quem Somos</h2>
          <p className="section-subtitle">
            Conheça a Recpol e nossa missão com a sustentabilidade e o meio ambiente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <video 
              className="w-full h-auto rounded-2xl shadow-xl max-w-full"
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
                fallback.innerHTML = '<p class="text-center text-gray-500 p-8 border-2 border-dashed border-gray-300 rounded-2xl">Vídeo não disponível no momento. Entre em contato conosco para mais informações.</p>';
                e.currentTarget.parentNode?.appendChild(fallback);
              }}
            >
              <source src="/lovable-uploads/1040064274377047.mp4" type="video/mp4" />
              <p className="text-center text-gray-500 p-8 border-2 border-dashed border-gray-300 rounded-2xl">
                Seu navegador não suporta a reprodução de vídeo. 
                <br />
                <a href="/lovable-uploads/1040064274377047.mp4" className="text-recpol-blue-dark underline" target="_blank" rel="noopener noreferrer">
                  Clique aqui para baixar o vídeo
                </a>
              </p>
            </video>
          </div>
          
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-recpol-blue-dark/10 text-recpol-blue-dark rounded-full">
              Nossa Política
            </span>
            <h3 className="text-3xl font-bold">POLÍTICA DE QUALIDADE E MEIO AMBIENTE</h3>
            <p className="text-gray-700">
              A RECPOL é uma empresa de reciclagem de polímeros situada no Estado de São Paulo, 
              com forte presença no mercado nacional. Com um compromisso firme com a qualidade e a 
              sustentabilidade, buscamos sempre a excelência em nossas operações, alinhando inovação, 
              responsabilidade e respeito ao meio ambiente.
            </p>
            <p className="text-gray-700">
              Nossa missão é oferecer soluções diferenciadas que atendam às necessidades de nossos clientes 
              e partes interessadas, com foco na melhoria contínua de nossos processos e na preservação 
              ambiental. Acreditamos que, ao promover práticas sustentáveis e adotar medidas de eficiência 
              energética, podemos contribuir de maneira significativa para um futuro mais sustentável.
            </p>
            
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-3">Compromissos da RECPOL:</h4>
              <div className="grid grid-cols-1 gap-3 pt-2">
                {features.map(feature => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-recpol-green flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-gray-700 mt-4">
              Na RECPOL, entendemos que a chave para o sucesso está em aliar qualidade e responsabilidade 
              ambiental, criando soluções que contribuem para um futuro mais limpo e eficiente.
            </p>
            
            <a href="#servicos" className="btn-primary inline-block mt-4">
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
