
import ProductCard from './cards/ProductCard';

const ProductsSection = () => {
  const products = [
    {
      id: "pa6-liso",
      name: 'PA 6 Liso',
      description: 'Poliamida 6 sem carga, utilizada em diversas aplicações industriais.',
      image: '/lovable-uploads/PA%206%20LISO%20(Nylon).jpeg'
    },
    {
      id: "pa66-fv30",
      name: 'PA6.6 com 30% FV',
      description: 'Poliamida 6.6 reforçada com 30% de fibra de vidro, proporcionando maior resistência mecânica.',
      image: '/lovable-uploads/PA6.6%20com%2030%25%20FV%20(Nylon).jpeg'
    },
    {
      id: "santoprene",
      name: 'Santoprene (TPV)',
      description: 'Termoplástico vulcanizado, combina as propriedades da borracha com a processabilidade dos termoplásticos.',
      image: '/lovable-uploads/Santoprene(TPV).jpg'
    },
    {
      id: "abs",
      name: 'ABS',
      description: 'Acrilonitrila Butadieno Estireno, conhecido por sua resistência e rigidez.',
      image: '/lovable-uploads/ABS.jpg'
    }
  ];

  return (
    <section id="produtos" className="py-24 bg-white" aria-labelledby="products-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 id="products-heading" className="section-title">Nossos Produtos</h2>
          <p className="section-subtitle">
            Oferecemos diversos tipos de polímeros reciclados para as mais variadas aplicações industriais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>

        <div className="text-center mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3">Precisa de um produto específico?</h3>
          <p className="text-gray-700 mb-6">
            Entre em contato conosco para conhecer nossa linha completa de polímeros reciclados 
            ou para desenvolvermos uma solução personalizada para sua necessidade.
          </p>
          <a href="#contato" className="btn-primary inline-block">
            Solicitar Informações
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
