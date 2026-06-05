import { supabase } from '../lib/supabase';
import type { LeadPayload, LeadRow } from '../types';

export type SubmitResult =
  | { success: true; data: LeadRow }
  | { success: false; error: string };

export async function submitLead(payload: LeadPayload): Promise<SubmitResult> {
  const { data, error } = await supabase
    .from('leads')
    .insert([payload])
    .select()
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}
