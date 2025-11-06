
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
            <p className="text-gray-700 mb-6">
              A RECPOL, empresa de reciclagem de polímeros, situada no Estado de São Paulo, com ampla atuação no mercado nacional, acredita que o compromisso com a Qualidade e Meio Ambiente leva à excelência em suas atividades, comprometendo-se a:
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-recpol-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700">
                    Satisfazer os clientes e partes interessadas, buscando soluções diferenciadas;{' '}
                    <span className="text-gray-600 italic">(manter os clientes satisfeitos)</span>
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-recpol-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700">
                    Gerenciar nossas atividades e processos, buscando sempre a melhoria contínua;{' '}
                    <span className="text-gray-600 italic">(Qualidade da produção)</span>
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-recpol-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700">
                    Atuar na preservação do meio ambiente e do seu principal aspecto ambiental, consumo de energia;{' '}
                    <span className="text-gray-600 italic">(Reduzir consumo de Energia elétrica e Água) / (Aumentar o tempo de vida útil dos aterros)</span>
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-recpol-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700">
                    Prevenir a poluição e outros compromissos específicos;{' '}
                    <span className="text-gray-600 italic">(reduzir emissão de fumaça preta dos veículos)</span>
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-recpol-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700">
                    Realizar nossas atividades em obediência à legislação e outros requisitos aplicáveis.{' '}
                    <span className="text-gray-600 italic">(atender aos requisitos legais e outros requisitos aplicáveis)</span>
                  </p>
                </div>
              </div>
            </div>
            
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
