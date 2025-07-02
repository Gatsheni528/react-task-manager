import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">TaskManager</Link>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
