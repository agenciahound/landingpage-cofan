import type { LeadFormData } from '../types';

export function calculateLeadScore(form: LeadFormData): number {
  let score = 0;

  switch (form.area_size) {
    case '3000-5000': score += 10; break;
    case '5000-7000': score += 15; break;
    case '7000-10000': score += 20; break;
    case '10000+': score += 30; break;
  }

  if (form.area_type === 'propria') {
    score += 10;
  }

  switch (form.annual_revenue) {
    case '50-70M': score += 10; break;
    case '70-100M': score += 15; break;
    case '100M+': score += 20; break;
  }

  if (form.credit_type === 'expansao' || form.credit_type === 'infraestrutura' || form.credit_type === 'energia') {
    score += 5;
  }

  if (form.name && form.whatsapp && form.email && form.city) {
    score += 10;
  }

  return score;
}
