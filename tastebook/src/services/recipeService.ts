// separation of services for my components to call
import type { Recipe } from '../types.ts';
import { supabase } from '../supabaseClient.ts';

// function to add a recipe to the database
export async function addRecipe(userId: string, recipe: Recipe) {
  const { data, error } = await supabase
    .from('recipes')
    .insert([{ user_id: userId, ...recipe }])
    .select();

  if (error) {
    console.error('Error adding recipe:', error.message);
    return null;
  }

  return data;
}
