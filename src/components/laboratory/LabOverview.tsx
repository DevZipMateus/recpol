import { FlaskConical, BadgeCheck, TestTube } from "lucide-react";
type LabOverviewProps = {
  imageSrc: string;
};
const LabOverview = ({
  imageSrc
}: LabOverviewProps) => {
  return <section className="bg-white py-[30px]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-recpol-blue-dark">Infraestrutura de Ponta</h2>
            <p className="text-gray-700">
              A Recpol possui um laboratório próprio equipado com tecnologia de última geração para análise 
              e caracterização de polímeros. Nossa equipe técnica especializada realiza testes rigorosos para 
              garantir que todos os materiais atendam aos mais altos padrões de qualidade.
            </p>
            <p className="text-gray-700">
              Com nosso laboratório interno, conseguimos oferecer:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <FlaskConical className="h-6 w-6 text-recpol-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-recpol-blue-dark">Análises Precisas</h3>
                  <p className="text-gray-600 text-sm">Resultados confiáveis e detalhados para cada material</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <TestTube className="h-6 w-6 text-recpol-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-recpol-blue-dark">Controle de Processos</h3>
                  <p className="text-gray-600 text-sm">Monitoramento constante de todas as etapas de produção</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <BadgeCheck className="h-6 w-6 text-recpol-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-recpol-blue-dark">Garantia de Qualidade</h3>
                  <p className="text-gray-600 text-sm">Certificação de todos os lotes produzidos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <FlaskConical className="h-6 w-6 text-recpol-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-recpol-blue-dark">Desenvolvimento</h3>
                  <p className="text-gray-600 text-sm">Pesquisa e criação de soluções personalizadas</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={imageSrc} alt="Laboratório Recpol" className="w-full h-[400px] object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default LabOverview;