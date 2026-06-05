import type { LeadFormData } from '../../types';
import type { QualifyingStep } from '../../config/formSteps';
import OptionButton from './OptionButton';

type StepQualifyingProps = {
  step: QualifyingStep;
  form: LeadFormData;
  onSelect: (field: keyof LeadFormData, value: string) => void;
  onAdvance: () => void;
};

export default function StepQualifying({ step, form, onSelect, onAdvance }: StepQualifyingProps) {
  return (
    <div>
      <h4 className="text-lg font-bold text-cofan-navy mb-1">
        {step.title}
      </h4>
      <p className="text-sm text-gray-500 mb-5 font-inter">{step.subtitle}</p>
      <div className="space-y-3">
        {step.options.map((o) => (
          <OptionButton
            key={o.value}
            value={o.value}
            field={step.field}
            label={o.label}
            selected={form[step.field] === o.value}
            onSelect={onSelect}
            onAdvance={onAdvance}
          />
        ))}
      </div>
    </div>
  );
}
