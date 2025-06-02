import { AddRecipeForm } from './addRecipeForm';
import Navbar from './Navbar';

// to do:
// - save the recipe to a database or state management

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Taste Book</h1>
      <p className=" font-extrabold bg-yellow-200">
        Capture recipes and the memories that go with them
      </p>
      <AddRecipeForm userId="a3bb189e-8bf9-3888-9912-ace4e6543002" />
    </main>
  );
}
