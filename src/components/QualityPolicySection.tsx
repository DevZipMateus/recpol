import AnimatedSection from './AnimatedSection';

const QualityPolicySection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <AnimatedSection className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Política de Qualidade e Meio Ambiente
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-primary">
            RECPOL
          </h3>
          
          <div className="bg-card rounded-lg shadow-lg p-8 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              A RECPOL, empresa de reciclagem de polímeros, situada no Estado de São Paulo, com ampla atuação no mercado nacional, acredita que o compromisso com a Qualidade e Meio Ambiente leva à excelência em suas atividades, comprometendo-se a:
            </p>
            
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-foreground">
                  • Satisfazer os clientes e partes interessadas, buscando soluções diferenciadas;
                </span>
                <span className="text-sm text-muted-foreground ml-4">
                  (manter os clientes satisfeitos)
                </span>
              </li>
              
              <li className="flex flex-col gap-1">
                <span className="text-foreground">
                  • Gerenciar nossas atividades e processos, buscando sempre a melhoria contínua;
                </span>
                <span className="text-sm text-muted-foreground ml-4">
                  (Qualidade da produção)
                </span>
              </li>
              
              <li className="flex flex-col gap-1">
                <span className="text-foreground">
                  • Atuar na preservação do meio ambiente e do seu principal aspecto ambiental, consumo de energia;
                </span>
                <span className="text-sm text-muted-foreground ml-4">
                  (Reduzir consumo de Energia elétrica e Água) / (Aumentar o tempo de vida útil dos aterros)
                </span>
              </li>
              
              <li className="flex flex-col gap-1">
                <span className="text-foreground">
                  • Prevenir a poluição e outros compromissos específicos;
                </span>
                <span className="text-sm text-muted-foreground ml-4">
                  (reduzir emissão de fumaça preta dos veículos)
                </span>
              </li>
              
              <li className="flex flex-col gap-1">
                <span className="text-foreground">
                  • Realizar nossas atividades em obediência à legislação e outros requisitos aplicáveis.
                </span>
                <span className="text-sm text-muted-foreground ml-4">
                  (atender aos requisitos legais e outros requisitos aplicáveis)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};
export default QualityPolicySection;