
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: [
        '(11) 94744-2886 (WhatsApp)'
      ]
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: [
        'edceia@recpol.ind.br'
      ]
    },
    {
      icon: MapPin,
      title: 'Endereço',
      details: [
        'Av. Marginal ao Córrego da Serraria, 209',
        'Conceição, Diadema - SP',
        'CEP 09980-390'
      ]
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      details: [
        'Segunda a Sexta: 07:30 às 17:30'
      ]
    }
  ];

  return (
    <section id="contato" className="py-24 bg-gray-50" aria-labelledby="contact-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender suas necessidades e responder suas dúvidas
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Informações de contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-recpol-blue-dark/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-recpol-blue-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-recpol-blue-dark">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-700">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mapa */}
          <div className="bg-white p-1 rounded-xl shadow-md border border-gray-100 overflow-hidden h-[350px] mt-6">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8879006386387!2d-46.609726!3d-23.6544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4308e824208d%3A0x4388cba8d1e09b82!2sAv.%20Marginal%20ao%20C%C3%B3rrego%20da%20Serraria%2C%20209%20-%20Concei%C3%A7%C3%A3o%2C%20Diadema%20-%20SP%2C%2009980-390!5e0!3m2!1spt-BR!2sbr!4v1619550000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              title="Localização da Recpol"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
