import type { LeadFormData } from '../../types';

type OptionButtonProps = {
  value: string;
  field: keyof LeadFormData;
  label: string;
  selected: boolean;
  onSelect: (field: keyof LeadFormData, value: string) => void;
  onAdvance: () => void;
};

export default function OptionButton({
  value,
  field,
  label,
  selected,
  onSelect,
  onAdvance,
}: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        onSelect(field, value);
        onAdvance();
      }}
      className={`w-full text-left px-5 py-4 rounded-xl border-2 font-inter text-sm font-medium transition-all duration-200 ${
        selected
          ? 'border-amber-500 bg-amber-50 text-amber-700'
          : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300 hover:bg-amber-50/50'
      }`}
    >
      {label}
    </button>
  );
}
