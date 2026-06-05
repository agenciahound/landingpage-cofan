import { useState, useCallback } from 'react';
import type { LeadFormData } from '../types';
import { INITIAL_FORM_DATA } from '../types';
import { TOTAL_STEPS } from '../config/formSteps';
import { canProceed } from '../utils/validation';
import { useLeadSubmit } from './useLeadSubmit';

export type UseLeadFormReturn = {
  step: number;
  form: LeadFormData;
  submitted: boolean;
  loading: boolean;
  error: string;
  canNext: boolean;
  setField: (key: keyof LeadFormData, value: string) => void;
  goNext: () => void;
  goBack: () => void;
  advanceAfterSelect: () => void;
  handleSubmit: () => Promise<void>;
};

export function useLeadForm(): UseLeadFormReturn {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<LeadFormData>(INITIAL_FORM_DATA);
  const { loading, error, submitted, submit } = useLeadSubmit();

  const setField = useCallback((key: keyof LeadFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const canNext = canProceed(form, step);

  const goNext = useCallback(() => {
    if (canProceed(form, step) && step < TOTAL_STEPS) {
      setStep((s) => s + 1);
    }
  }, [form, step]);

  const goBack = useCallback(() => {
    setStep((s) => Math.max(1, s - 1));
  }, []);

  const advanceAfterSelect = useCallback(() => {
    if (step < TOTAL_STEPS) {
      setTimeout(() => setStep((s) => s + 1), 300);
    }
  }, [step]);

  const handleSubmit = async () => {
    if (!canProceed(form, step)) return;
    await submit(form);
  };

  return {
    step,
    form,
    submitted,
    loading,
    error,
    canNext,
    setField,
    goNext,
    goBack,
    advanceAfterSelect,
    handleSubmit,
  };
}
