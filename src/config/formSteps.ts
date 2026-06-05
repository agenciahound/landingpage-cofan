import type { LeadFormData } from '../types';

export type SelectOption = {
  value: string;
  label: string;
};

export type ContactField = {
  key: keyof LeadFormData;
  label: string;
  placeholder: string;
  type: string;
};

export const TOTAL_STEPS = 5;

export const AREA_SIZE_OPTIONS: SelectOption[] = [
  { value: '<3000', label: 'Menor que 3 mil hectares' },
  { value: '3000-5000', label: '3 mil a 5 mil hectares' },
  { value: '5000-7000', label: '5 mil a 7 mil hectares' },
  { value: '7000-10000', label: '7 mil a 10 mil hectares' },
  { value: '10000+', label: 'Mais de 10 mil hectares' },
];

export const AREA_TYPE_OPTIONS: SelectOption[] = [
  { value: 'propria', label: 'Propria' },
  { value: 'arrendada', label: 'Arrendada' },
];

export const CREDIT_TYPE_OPTIONS: SelectOption[] = [
  { value: 'expansao', label: 'Expansao' },
  { value: 'infraestrutura', label: 'Infraestrutura' },
  { value: 'energia', label: 'Energia' },
  { value: 'safra', label: 'Planejamento de Safra' },
  { value: 'nao_sei', label: 'Ainda nao sei' },
];

export const ANNUAL_REVENUE_OPTIONS: SelectOption[] = [
  { value: '25-50M', label: 'R$ 25 a 50 milhoes' },
  { value: '50-70M', label: 'R$ 50 a 70 milhoes' },
  { value: '70-100M', label: 'R$ 70 a 100 milhoes' },
  { value: '100M+', label: 'Mais de R$ 100 milhoes' },
];

export const CONTACT_FIELDS: ContactField[] = [
  { key: 'name', label: 'Nome completo', placeholder: 'Seu nome', type: 'text' },
  { key: 'whatsapp', label: 'WhatsApp', placeholder: '(00) 00000-0000', type: 'tel' },
  { key: 'email', label: 'E-mail', placeholder: 'seu@email.com.br', type: 'email' },
  { key: 'city', label: 'Cidade / Estado', placeholder: 'Ex: Sorriso, MT', type: 'text' },
];

export type QualifyingStep = {
  field: keyof LeadFormData;
  title: string;
  subtitle: string;
  options: SelectOption[];
};

export const QUALIFYING_STEPS: QualifyingStep[] = [
  {
    field: 'area_size',
    title: 'Qual o tamanho da sua area?',
    subtitle: 'Selecione a opcao mais proxima',
    options: AREA_SIZE_OPTIONS,
  },
  {
    field: 'area_type',
    title: 'A sua area de plantio e',
    subtitle: 'Tipo de posse da terra',
    options: AREA_TYPE_OPTIONS,
  },
  {
    field: 'credit_type',
    title: 'Qual tipo de credito voce precisa?',
    subtitle: 'Finalidade principal do credito',
    options: CREDIT_TYPE_OPTIONS,
  },
  {
    field: 'annual_revenue',
    title: 'Qual e o seu Faturamento Anual?',
    subtitle: 'Faturamento bruto anual da operacao',
    options: ANNUAL_REVENUE_OPTIONS,
  },
];
