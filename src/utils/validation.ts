import type { LeadFormData } from '../types';
import { TOTAL_STEPS } from '../config/formSteps';

export function canProceed(form: LeadFormData, step: number): boolean {
  if (step === 1) return form.area_size !== '';
  if (step === 2) return form.area_type !== '';
  if (step === 3) return form.credit_type !== '';
  if (step === 4) return form.annual_revenue !== '';
  if (step === 5) return !!(form.name && form.whatsapp && form.email && form.city);
  return false;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isLastStep(step: number): boolean {
  return step === TOTAL_STEPS;
}
