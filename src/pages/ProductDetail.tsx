
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Product database
const products = [
  {
    id: "pa6-liso",
    name: 'PA 6 Liso',
    fullName: 'Poliamida 6 Liso (Nylon)',
    description: 'Poliamida 6 sem carga, utilizada em diversas aplicações industriais.',
    image: '/lovable-uploads/PA%206%20LISO%20(Nylon).jpeg',
    detailedDescription: 'O PA 6 Liso (Nylon) é uma poliamida de alta performance, conhecida por sua excelente combinação de resistência, flexibilidade e baixo coeficiente de atrito. Este material versátil é amplamente utilizado na fabricação de peças plásticas técnicas, especialmente em indústrias como automotiva, eletroeletrônica e de bens de consumo. Com características superiores em termos de resistência mecânica e durabilidade, o PA 6 Liso é ideal para peças que exigem alta performance e resistência ao desgaste.',
    characteristics: [
      'Composição: Poliamida 6, também conhecida como Nylon.',
      'Alta resistência mecânica: Excelente resistência à tração e compressão, tornando-o ideal para peças que suportam cargas e tensões.',
      'Durabilidade: Alta resistência ao desgaste e abrasão, garantindo maior vida útil para as peças fabricadas.',
      'Flexibilidade: Boa resistência à flexão e ao impacto, mesmo em temperaturas baixas.',
      'Baixo coeficiente de atrito: Ideal para peças que exigem baixo atrito, como engrenagens e buchas.'
    ],
    benefits: [
      'Resistência superior: Ideal para aplicações que exigem alta resistência mecânica e abrasiva.',
      'Versatilidade: Pode ser utilizado em uma vasta gama de aplicações, como componentes automotivos, peças elétricas, e utensílios domésticos.',
      'Desempenho confiável: Oferece um bom desempenho em ambientes agressivos, mantendo suas propriedades ao longo do tempo.',
      'Facilidade de processamento: O PA 6 Liso (Nylon) pode ser moldado em diferentes formas e utilizado em várias técnicas de fabricação.'
    ],
    conclusion: 'O PA 6 Liso (Nylon) é a escolha perfeita para quem precisa de um material de alta qualidade, durável e de fácil processamento, oferecendo um excelente custo-benefício em diversas aplicações industriais.',
    applications: ['Peças mecânicas', 'Componentes elétricos', 'Engrenagens'],
    properties: ['Alta resistência mecânica', 'Boa resistência a impactos', 'Resistência à abrasão']
  },
  {
    id: "pa66-fv30",
    name: 'PA6.6 com 30% FV',
    fullName: 'Poliamida 6.6 com 30% Fibra de Vidro',
    description: 'Poliamida 6.6 reforçada com 30% de fibra de vidro, proporcionando maior resistência mecânica.',
    image: '/lovable-uploads/PA6.6%20com%2030%25%20FV%20(Nylon).jpeg',
    detailedDescription: 'O PA 6.6 com 30% FV é uma poliamida de alta performance, reforçada com 30% de fibras de vidro, ideal para aplicações que exigem resistência mecânica superior e estabilidade dimensional. Este material oferece uma excelente combinação de dureza, resistência ao desgaste e à abrasão, sendo amplamente utilizado em indústrias automotiva, elétrica e de engenharia para a produção de peças estruturais, componentes de motores e sistemas de transmissão.',
    characteristics: [
      'Composição: Poliamida 6.6 com 30% de fibras de vidro.',
      'Alta resistência: Excelente resistência à tração e ao impacto, proporcionando maior durabilidade e performance.',
      'Estabilidade térmica: Suporta altas temperaturas sem comprometer suas propriedades mecânicas.',
      'Baixo coeficiente de atrito: Ideal para componentes em movimento ou que exigem mínima fricção.',
      'Aplicações versáteis: Indicado para fabricação de peças técnicas, como engrenagens, suportes, conectores e carcaças.'
    ],
    benefits: [
      'Maior vida útil de componentes mecânicos.',
      'Redução da necessidade de manutenção devido à resistência superior ao desgaste.',
      'Ideal para ambientes exigentes, com alta carga térmica e mecânica.'
    ],
    conclusion: 'O PA 6.6 com 30% FV é a escolha certa para quem busca qualidade, resistência e eficiência em processos industriais.',
    applications: ['Componentes automotivos', 'Peças de engenharia', 'Sistemas elétricos'],
    properties: ['Elevada rigidez', 'Estabilidade dimensional', 'Resistência a altas temperaturas']
  },
  {
    id: "santoprene",
    name: 'Santoprene (TPV)',
    fullName: 'Santoprene - Termoplástico Vulcanizado',
    description: 'Termoplástico vulcanizado, combina as propriedades da borracha com a processabilidade dos termoplásticos.',
    image: '/lovable-uploads/Santoprene(TPV).jpg',
    detailedDescription: 'O Santoprene (TPV) é um elastômero termoplástico altamente versátil, que combina a elasticidade de uma borracha com a processabilidade de um termoplástico. Ele é ideal para uma ampla gama de aplicações industriais, oferecendo excelente resistência a ambientes agressivos, como altas temperaturas, radiação UV e produtos químicos. O Santoprene é amplamente utilizado nas indústrias automotiva, de construção, elétrica e de bens de consumo devido à sua durabilidade, flexibilidade e resistência ao desgaste.',
    characteristics: [
      'Composição: Elastômero termoplástico (TPV), misturando borracha e termoplástico para combinar as melhores qualidades de ambos os materiais.',
      'Resistência: Alta resistência a temperaturas extremas, radiação UV, ozônio e substâncias químicas, garantindo longa durabilidade.',
      'Flexibilidade e Elasticidade: Excelente capacidade de deformação e recuperação, ideal para peças que exigem alta flexibilidade e resistência ao impacto.',
      'Processabilidade: Pode ser facilmente moldado por técnicas como injeção e extrusão, permitindo a fabricação de peças com geometria complexa.',
      'Baixo coeficiente de fricção: Desempenho excepcional em peças móveis e de baixo atrito.'
    ],
    benefits: [
      'Durabilidade superior: Resistência excepcional ao desgaste, calor e intempéries, proporcionando maior vida útil para as peças.',
      'Versatilidade: Adequado para uma ampla gama de aplicações, desde vedação até componentes estruturais.',
      'Sustentabilidade: Comparado aos materiais tradicionais de borracha, o Santoprene oferece um menor impacto ambiental devido ao processo de fabricação termoplástico.',
      'Desempenho confiável: Ideal para condições severas e ambientes agressivos, sem comprometer a performance das peças.'
    ],
    specificApplications: [
      'Indústria Automotiva: Peças para vedação, mangueiras, suportes, gaxetas e componentes internos de veículos.',
      'Indústria de Construção: Vedações, juntas e vedantes para a construção civil.',
      'Indústria Elétrica: Componentes para isolamento e vedação elétrica, conectores e interruptores.',
      'Bens de Consumo: Produtos que exigem flexibilidade e durabilidade, como peças para eletrodomésticos e acessórios.'
    ],
    conclusion: 'O Santoprene (TPV) oferece uma solução ideal para quem busca materiais flexíveis, duráveis e com excelente resistência a condições severas, além de garantir desempenho superior em diversas aplicações industriais.',
    applications: ['Vedações', 'Juntas', 'Componentes flexíveis'],
    properties: ['Alta flexibilidade', 'Resistência química', 'Boa vedação']
  },
  {
    id: "abs",
    name: 'ABS',
    fullName: 'Acrilonitrila Butadieno Estireno',
    description: 'Acrilonitrila Butadieno Estireno, conhecido por sua resistência e rigidez.',
    image: '/lovable-uploads/ABS.jpg',
    detailedDescription: 'O ABS (Acrilonitrila Butadieno Estireno) é um termoplástico amplamente utilizado em diversas indústrias devido às suas excelentes propriedades mecânicas, facilidade de processamento e versatilidade. Esse material combina a rigidez e a resistência química da acrilonitrila, a tenacidade do butadieno e a estabilidade dimensional do estireno, resultando em um plástico de alto desempenho, ideal para uma variedade de aplicações técnicas e de consumo.',
    characteristics: [
      'Composição: Acrilonitrila, butadieno e estireno, que conferem ao ABS uma combinação única de resistência, flexibilidade e durabilidade.',
      'Resistência mecânica: Excelente resistência à tração, impacto e compressão, tornando-o adequado para peças sujeitas a esforços mecânicos.',
      'Estabilidade térmica: Boa resistência a temperaturas moderadas, mantendo a integridade dimensional e as propriedades mecânicas.',
      'Facilidade de processamento: O ABS pode ser facilmente moldado por injeção, extrusão e outras técnicas, permitindo a fabricação de peças com formas complexas e alta precisão.',
      'Boa resistência química: Resistente a ácidos, álcalis e graxas, o que o torna ideal para aplicações em ambientes industriais exigentes.'
    ],
    benefits: [
      'Alta resistência ao impacto: O ABS é ideal para componentes que sofrem impactos frequentes ou estão sujeitos a condições mais rigorosas.',
      'Versatilidade: Pode ser utilizado em uma ampla gama de aplicações, como peças automotivas, componentes eletrônicos e utensílios domésticos.',
      'Excelente acabamento superficial: O material permite acabamentos de alta qualidade, o que o torna ideal para aplicações visuais e estéticas.',
      'Fácil de processar e reciclar: O ABS pode ser facilmente reciclado, proporcionando uma opção sustentável em muitas aplicações industriais.'
    ],
    specificApplications: [
      'Indústria Automotiva: Painéis, peças de interiores, componentes estruturais e suportes.',
      'Eletrônicos e Eletrodomésticos: Cases de computadores, impressoras, televisores, eletrodomésticos e componentes elétricos.',
      'Indústria de Brinquedos: Peças de brinquedos, devido à sua resistência e capacidade de moldagem.',
      'Construção e Engenharia: Tubos, conexões e peças de sistemas de encanamento.'
    ],
    conclusion: 'O ABS é uma excelente opção para quem busca um material com alta resistência ao impacto, facilidade de processamento e versatilidade em diversas aplicações, oferecendo excelente custo-benefício e durabilidade.',
    applications: ['Carcaças de equipamentos', 'Peças de automóveis', 'Componentes eletrônicos'],
    properties: ['Bom acabamento superficial', 'Rigidez', 'Facilidade de processamento']
  },
  {
    id: "pp-talco",
    name: 'PP com Talco',
    fullName: 'Polipropileno com Talco',
    description: 'Polipropileno reforçado com talco, proporcionando maior rigidez e estabilidade dimensional.',
    images: [
      '/lovable-uploads/2ddca795-f533-495a-ba58-003db4801f76.png',
      '/lovable-uploads/ce195b50-b854-494c-9f06-e4c46be9c0d3.png'
    ],
    image: '/lovable-uploads/2ddca795-f533-495a-ba58-003db4801f76.png',
    detailedDescription: 'Recpol Polímeros, empresa brasileira dedicando-se à comercialização de plásticos produz compostos e blendas que são usados nas industrias em processamento desenvolvimento poliméricos de engenharia a partir das resinas. Atualmente a Recpol polímeros conta com laboratório de controle e somos uma empresa certificadora pela norma ISO 9001:2015 e ISO 14001:2015, compreendida em oferecer produtos com o mais alto padrão de qualidade e meio ambiente.',
    introduction: 'A partir das resinas bases de Polipropileno PP com talco',
    aboutOrigin: 'A origem polipropileno com talco (PP) sua baixa rigidez, alta contração e baixa resistência térmica, aplicação técnicas e industriais.',
    hasPropertyTable: true,
    propertyTable: [
      { property: 'Rigidez (módulo de elasticidade)', description: 'Alta rigidez devido à presença de partículas minerais' },
      { property: 'Estabilidade dimensional', description: 'Excelente, com baixa contração e menor empenamento' },
      { property: 'Resistência térmica (HDT)', description: 'Elevada, suporta temperaturas maiores sem deformação' },
      { property: 'Resistência ao impacto', description: 'Reduzida (pode ser ajustada com aditivos específicos, se necessário)' },
      { property: 'Densidade', description: 'Moderada a alta, variando conforme o teor de talco (geralmente 1,1-1,3 g/cm³)' },
      { property: 'Acabamento superficial', description: 'Opaco e fosco, com textura mais áspera que o PP puro' },
      { property: 'Processabilidade', description: 'Boa, mas pode exigir ajustes em parâmetros de injeção' },
      { property: 'Resistência à abrasão', description: 'Boa, adequada para aplicação com contato mecânico leve' }
    ],
    conclusion: 'O Polipropileno com Talco é uma excelente opção para aplicações técnicas e industriais que necessitam de maior rigidez e estabilidade dimensional.',
    applications: ['Peças automotivas', 'Componentes industriais', 'Eletrodomésticos'],
    properties: ['Alta rigidez', 'Excelente estabilidade dimensional', 'Boa resistência térmica']
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
              {product.images ? (
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {product.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <img 
                              src={image} 
                              alt={`${product.name} - Imagem ${index + 1}`} 
                              className="w-full h-auto object-cover rounded-lg"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
              ) : (
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">{product.fullName}</h1>
                <p className="text-lg text-gray-700 mb-6">{product.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Descrição</h2>
                    <p className="text-gray-700">{product.detailedDescription}</p>
                  </div>
                  
                  {product.introduction && (
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Introdução</h2>
                      <p className="text-gray-700">{product.introduction}</p>
                    </div>
                  )}
                  
                  {product.aboutOrigin && (
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Origem</h2>
                      <p className="text-gray-700">{product.aboutOrigin}</p>
                    </div>
                  )}
                  
                  {product.hasPropertyTable && product.propertyTable && (
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Propriedades principais</h2>
                      <Table className="border rounded-lg">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-1/3 bg-gray-100">Propriedade</TableHead>
                            <TableHead className="bg-gray-100">Descrição</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {product.propertyTable.map((prop, index) => (
                            <TableRow key={index} className="hover:bg-gray-50">
                              <TableCell className="font-medium border-r">{prop.property}</TableCell>
                              <TableCell>{prop.description}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                  
                  {product.characteristics && (
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Características principais</h2>
                      <ul className="list-disc pl-5 text-gray-700">
                        {product.characteristics.map((characteristic, index) => (
                          <li key={index} className="mb-2">{characteristic}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.benefits && (
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Benefícios</h2>
                      <ul className="list-disc pl-5 text-gray-700">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="mb-2">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.specificApplications && (
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Aplicações</h2>
                      <ul className="list-disc pl-5 text-gray-700">
                        {product.specificApplications.map((app, index) => (
                          <li key={index} className="mb-2">{app}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {!product.specificApplications && product.applications && (
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Aplicações</h2>
                      <ul className="list-disc pl-5 text-gray-700">
                        {product.applications.map((app, index) => (
                          <li key={index} className="mb-2">{app}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.properties && !product.hasPropertyTable && (
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Propriedades</h2>
                      <ul className="list-disc pl-5 text-gray-700">
                        {product.properties.map((prop, index) => (
                          <li key={index} className="mb-2">{prop}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.conclusion && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="text-gray-800 italic">{product.conclusion}</p>
                    </div>
                  )}
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
