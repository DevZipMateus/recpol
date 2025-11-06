const QualityPolicySection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
            Política de Qualidade e Meio Ambiente
          </h2>
          
          <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 border border-border">
            <p className="text-card-foreground leading-relaxed mb-6">
              A RECPOL, empresa de reciclagem de polímeros, situada no Estado de São Paulo, com ampla atuação no mercado nacional, acredita que o compromisso com a Qualidade e Meio Ambiente leva à excelência em suas atividades, comprometendo-se a:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl mt-1">•</span>
                <div>
                  <p className="text-card-foreground leading-relaxed">
                    Satisfazer os clientes e partes interessadas, buscando soluções diferenciadas;
                  </p>
                  <p className="text-muted-foreground text-sm mt-1 italic">
                    (manter os clientes satisfeitos)
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl mt-1">•</span>
                <div>
                  <p className="text-card-foreground leading-relaxed">
                    Gerenciar nossas atividades e processos, buscando sempre a melhoria contínua;
                  </p>
                  <p className="text-muted-foreground text-sm mt-1 italic">
                    (Qualidade da produção)
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl mt-1">•</span>
                <div>
                  <p className="text-card-foreground leading-relaxed">
                    Atuar na preservação do meio ambiente e do seu principal aspecto ambiental, consumo de energia;
                  </p>
                  <p className="text-muted-foreground text-sm mt-1 italic">
                    (Reduzir consumo de Energia elétrica e Água) / (Aumentar o tempo de vida útil dos aterros)
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl mt-1">•</span>
                <div>
                  <p className="text-card-foreground leading-relaxed">
                    Prevenir a poluição e outros compromissos específicos;
                  </p>
                  <p className="text-muted-foreground text-sm mt-1 italic">
                    (reduzir emissão de fumaça preta dos veículos)
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl mt-1">•</span>
                <div>
                  <p className="text-card-foreground leading-relaxed">
                    Realizar nossas atividades em obediência à legislação e outros requisitos aplicáveis.
                  </p>
                  <p className="text-muted-foreground text-sm mt-1 italic">
                    (atender aos requisitos legais e outros requisitos aplicáveis)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicySection;
