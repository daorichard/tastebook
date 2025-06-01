import { addRecipe } from '../services/recipeService';

// Component to add a new recipe
export function AddRecipeForm({ userId }: { userId: string }) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // create a new FormData object from the form
    // and extract the values for title, ingredients, and instructions
    // then call the addRecipe function with the userId and recipe data
    const form = e.currentTarget;
    const formData = new FormData(form);

    const title = formData.get('title') as string;
    const ingredients = formData.get('ingredients') as string;
    const instructions = formData.get('instructions') as string;

    const recipe = {
      user_id: userId,
      title,
      ingredients,
      instructions,
    };

    console.log('Adding recipe:', recipe);
    const result = await addRecipe(userId, recipe);
    if (result) {
      console.log('Recipe added successfully:', result);
      form.reset(); // reset the form after successful submission
    } else {
      console.error('Failed to add recipe');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" required />
      <textarea name="ingredients" placeholder="Ingredients" required />
      <textarea name="instructions" placeholder="Instructions" required />
      <button type="submit">Add Recipe</button>
    </form>
  );
}
