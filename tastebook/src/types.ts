export interface Recipe {
  id?: string;
  user_id?: string;
  title: string;
  ingredients: string;
  instructions: string;
  last_made?: string; // ISO date string e.g. '2025-06-01'
  created_at?: string;
}
