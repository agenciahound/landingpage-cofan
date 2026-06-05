import { TOTAL_STEPS } from '../../config/formSteps';

type ProgressBarProps = {
  step: number;
};

export default function ProgressBar({ step }: ProgressBarProps) {
  const pct = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500 font-inter">
          Etapa {step} de {TOTAL_STEPS}
        </span>
        <span className="text-xs font-semibold text-amber-600 font-inter">
          {pct}%
        </span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
