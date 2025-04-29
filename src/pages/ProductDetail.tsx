
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useEffect } from 'react';

// Product database
const products = [
  {
    id: "pa6-liso",
    name: 'PA 6 Liso',
    fullName: 'Poliamida 6 Liso (Nylon)',
    description: 'Poliamida 6 sem carga, utilizada em diversas aplicações industriais.',
    image: '/lovable-uploads/PA%206%20LISO%20(Nylon).jpeg',
    detailedDescription: 'Detalhes completos sobre o produto PA 6 Liso serão adicionados aqui.',
    applications: ['Peças mecânicas', 'Componentes elétricos', 'Engrenagens'],
    properties: ['Alta resistência mecânica', 'Boa resistência a impactos', 'Resistência à abrasão']
  },
  {
    id: "pa66-fv30",
    name: 'PA6.6 com 30% FV',
    fullName: 'Poliamida 6.6 com 30% Fibra de Vidro',
    description: 'Poliamida 6.6 reforçada com 30% de fibra de vidro, proporcionando maior resistência mecânica.',
    image: '/lovable-uploads/PA6.6%20com%2030%25%20FV%20(Nylon).jpeg',
    detailedDescription: 'Detalhes completos sobre o produto PA6.6 com 30% de fibra de vidro serão adicionados aqui.',
    applications: ['Componentes automotivos', 'Peças de engenharia', 'Sistemas elétricos'],
    properties: ['Elevada rigidez', 'Estabilidade dimensional', 'Resistência a altas temperaturas']
  },
  {
    id: "santoprene",
    name: 'Santoprene (TPV)',
    fullName: 'Santoprene - Termoplástico Vulcanizado',
    description: 'Termoplástico vulcanizado, combina as propriedades da borracha com a processabilidade dos termoplásticos.',
    image: '/lovable-uploads/Santoprene(TPV).jpg',
    detailedDescription: 'Detalhes completos sobre o produto Santoprene (TPV) serão adicionados aqui.',
    applications: ['Vedações', 'Juntas', 'Componentes flexíveis'],
    properties: ['Alta flexibilidade', 'Resistência química', 'Boa vedação']
  },
  {
    id: "abs",
    name: 'ABS',
    fullName: 'Acrilonitrila Butadieno Estireno',
    description: 'Acrilonitrila Butadieno Estireno, conhecido por sua resistência e rigidez.',
    image: '/lovable-uploads/ABS.jpg',
    detailedDescription: 'Detalhes completos sobre o produto ABS serão adicionados aqui.',
    applications: ['Carcaças de equipamentos', 'Peças de automóveis', 'Componentes eletrônicos'],
    properties: ['Bom acabamento superficial', 'Rigidez', 'Facilidade de processamento']
  },
  {
    id: "retaprene",
    name: 'Retaprene Poliuretanos',
    fullName: 'Retaprene - Poliuretanos Termoplásticos',
    description: 'Polímeros versáteis com excelentes propriedades mecânicas e de resistência química.',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0dae9?q=80&w=1170&auto=format&fit=crop',
    detailedDescription: 'Detalhes completos sobre o produto Retaprene Poliuretanos serão adicionados aqui.',
    applications: ['Calçados', 'Revestimentos', 'Adesivos'],
    properties: ['Alta elasticidade', 'Resistência à abrasão', 'Boa adesão']
  }
];

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set document title
    document.title = product ? `${product.name} | Recpol` : 'Produto | Recpol';
  }, [product]);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow py-24">
          <div className="section-container">
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
              <p className="mb-8">O produto que você está procurando não existe ou foi removido.</p>
              <Link to="/">
                <Button>Voltar para a página inicial</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-50 py-16">
          <div className="section-container">
            <Link to="/#produtos" className="inline-flex items-center text-recpol-blue-dark hover:text-recpol-green transition-colors mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para produtos
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">{product.fullName}</h1>
                <p className="text-lg text-gray-700 mb-6">{product.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Descrição</h2>
                    <p className="text-gray-700">{product.detailedDescription}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Aplicações</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                      {product.applications.map((app, index) => (
                        <li key={index}>{app}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Propriedades</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                      {product.properties.map((prop, index) => (
                        <li key={index}>{prop}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-semibold">Precisa de mais informações?</h3>
                  <a href="/#contato" className="btn-primary inline-block">
                    Solicitar informações técnicas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
