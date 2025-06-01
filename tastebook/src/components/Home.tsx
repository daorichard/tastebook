import { AddRecipeForm } from './addRecipeForm';

// to do:
// - save the recipe to a database or state management

export default function Home() {
  return (
    <main>
      <h1>Taste Book</h1>
      <p>Capture recipes and the memories that go with them</p>
      <AddRecipeForm userId="a3bb189e-8bf9-3888-9912-ace4e6543002" />
    </main>
  );
}
