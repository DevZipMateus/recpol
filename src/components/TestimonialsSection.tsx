
import TestimonialCard from './TestimonialCard';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "A parceria com a Recpol trouxe resultados excelentes para nossa empresa. A equipe é atenciosa e nos ajudou a otimizar nosso sistema de gerenciamento de resíduos.",
      author: "Carlos Silva",
      role: "Diretor Industrial",
      rating: 5
    },
    {
      content: "Profissionais extremamente competentes e atualizados. Sempre nos mantêm informados sobre mudanças na legislação ambiental e nos orientam da melhor forma possível.",
      author: "Ana Souza",
      role: "Gestora Ambiental",
      rating: 5
    },
    {
      content: "Desde que contratamos os serviços da Recpol, temos mais tranquilidade em relação ao descarte adequado dos nossos resíduos industriais. O processo se tornou muito mais eficiente.",
      author: "Marcos Oliveira",
      role: "CEO",
      rating: 5
    },
    {
      content: "Atendimento personalizado e de qualidade. O serviço de coleta e transporte é sempre pontual e segue todas as normas ambientais necessárias.",
      author: "Patricia Mendes",
      role: "Gerente de Sustentabilidade",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.author} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <TestimonialCard 
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
