import { useState } from 'react';
import { submitLead } from '../services/leadService';
import { calculateLeadScore } from '../utils/leadScoring';
import type { LeadFormData } from '../types';

export type UseLeadSubmitReturn = {
  loading: boolean;
  error: string;
  submitted: boolean;
  submit: (form: LeadFormData) => Promise<void>;
};

export function useLeadSubmit(): UseLeadSubmitReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = async (form: LeadFormData) => {
    setLoading(true);
    setError('');

    const leadScore = calculateLeadScore(form);
    const result = await submitLead({ ...form, lead_score: leadScore });

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError('Ocorreu um erro. Por favor, tente novamente.');
    }
  };

  return { loading, error, submitted, submit };
}
