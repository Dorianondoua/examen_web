import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">Dépenses</Link>
      <div>
        <Link to="/expenses" className="mr-4">Liste</Link>
        <Link to="/expense">Ajouter</Link>
      </div>
    </nav>
  );
};

export default Navbar;