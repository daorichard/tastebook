export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Taste Book</div>
        <div className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/add-recipe" className="text-gray-300 hover:text-white">
            Add Recipe
          </a>
          <a href="/about" className="text-gray-300 hover:text-white">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
