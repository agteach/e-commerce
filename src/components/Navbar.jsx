import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 shadow flex justify-between">
      <h1 className="text-xl font-bold">Shop</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}


export default Navbar