import RecipeForm from './RecipeForm';
// to do:
// - save the recipe to a database or state management

export default function Home() {
  return (
    <main>
      <h1>Taste Book</h1>
      <p>Capture recipes and the memories that go with them</p>

      <button>Add a recipe</button>
      <RecipeForm
        onSubmit={(data) => {
          console.log('Recipe submitted:', data);
          // Here you would typically send the data to your backend or state management
          const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
          recipes.push(data);
          localStorage.setItem('recipes', JSON.stringify(recipes));
          alert('Recipe saved successfully!');
          // Reset the form or redirect as needed
        }}
      ></RecipeForm>
    </main>
  );
}
