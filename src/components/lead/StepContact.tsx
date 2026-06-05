import type { LeadFormData } from '../../types';
import { CONTACT_FIELDS } from '../../config/formSteps';
import { formatWhatsApp } from '../../utils/formatters';

type StepContactProps = {
  form: LeadFormData;
  error: string;
  onFieldChange: (key: keyof LeadFormData, value: string) => void;
};

export default function StepContact({ form, error, onFieldChange }: StepContactProps) {
  const handleChange = (key: keyof LeadFormData, raw: string) => {
    if (key === 'whatsapp') {
      onFieldChange(key, formatWhatsApp(raw));
    } else {
      onFieldChange(key, raw);
    }
  };

  return (
    <div>
      <h4 className="text-lg font-bold text-cofan-navy mb-1">
        Seus dados de contato
      </h4>
      <p className="text-sm text-gray-500 mb-5 font-inter">
        Nossa equipe entrará em contato para a análise gratuita
      </p>
      <div className="space-y-4">
        {CONTACT_FIELDS.map(({ key, label, placeholder, type }) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 mb-1.5 font-inter">
              {label}
            </label>
            <input
              type={type}
              placeholder={placeholder}
              value={form[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl font-inter text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
            />
          </div>
        ))}
      </div>
      {error && (
        <p className="mt-3 text-sm text-red-600 font-inter">{error}</p>
      )}
    </div>
  );
}
