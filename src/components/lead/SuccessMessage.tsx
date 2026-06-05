import { CheckCircle } from 'lucide-react';

export default function SuccessMessage() {
  return (
    <div className="text-center py-12 px-6">
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={40} className="text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-cofan-navy mb-3">
        Análise solicitada com sucesso!
      </h3>
      <p className="text-gray-600 font-inter max-w-sm mx-auto">
        Nossa equipe entrará em contato em breve para dar inicio ao diagnóstico
        estratégico da sua operação.
      </p>
    </div>
  );
}
