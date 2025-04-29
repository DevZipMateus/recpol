
const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
