import { useState } from "react";

export default function RecipeForm({ onSubmit }: { onSubmit: (data: { name: string; description: string }) => void }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ name, description });
    setName("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Recipe Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Save Recipe</button>
    </form>
  );
}