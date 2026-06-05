export type LeadFormData = {
  area_size: string;
  area_type: string;
  credit_type: string;
  annual_revenue: string;
  objective_clear: string;
  name: string;
  whatsapp: string;
  email: string;
  city: string;
};

export type LeadPayload = LeadFormData & {
  lead_score: number;
};

export type LeadRow = LeadPayload & {
  id: string;
  created_at: string;
};

export const INITIAL_FORM_DATA: LeadFormData = {
  area_size: '',
  area_type: '',
  credit_type: '',
  annual_revenue: '',
  objective_clear: '',
  name: '',
  whatsapp: '',
  email: '',
  city: '',
};
