import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Shop<span>Zone</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/wishlist">❤️ Wishlist</Link>

        {user && <Link to="/orders">Orders</Link>}

        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-badge">{cartCount}</span>
        </Link>

        {user ? (
          <div className="user-menu">
            <span>Hi, {user.name}</span>

            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;