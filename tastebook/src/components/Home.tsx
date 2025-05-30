import RecipeForm from './RecipeForm';

export default function Home() {
  return (
    <main>
      <h1>Taste Book</h1>
      <p>Capture recipes and the memories that go with them</p>

      <button>Add a recipe</button>
      <RecipeForm
        onSubmit={(data) => {
          console.log('Recipe submitted:', data);
        }}
      ></RecipeForm>
    </main>
  );
}
