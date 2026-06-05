import { ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';
import { TOTAL_STEPS } from '../../config/formSteps';

type NavigationButtonsProps = {
  step: number;
  canNext: boolean;
  loading: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
};

export default function NavigationButtons({
  step,
  canNext,
  loading,
  onBack,
  onNext,
  onSubmit,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-8">
      {step > 1 ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 px-5 py-2.5 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-xl transition-colors font-inter"
          aria-label="Voltar para etapa anterior"
        >
          <ChevronLeft size={16} /> Voltar
        </button>
      ) : (
        <div />
      )}

      {step < TOTAL_STEPS ? (
        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          className="inline-flex items-center gap-1 px-6 py-2.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-all font-inter"
          aria-label="Proxima etapa"
        >
          Continuar <ChevronRight size={16} />
        </button>
      ) : (
        <button
          type="button"
          onClick={onSubmit}
          disabled={!canNext || loading}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-all font-inter"
          aria-label="Solicitar analise gratuita"
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Enviando...
            </>
          ) : (
            <>
              Solicitar analise gratuita <ChevronRight size={16} />
            </>
          )}
        </button>
      )}
    </div>
  );
}
