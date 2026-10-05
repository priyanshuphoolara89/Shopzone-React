import { Link } from "react-router-dom";

import { useWishlist } from "../context/WishlistContext";

import ProductCard from "../components/ProductCard";

function Wishlist() {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <main className="empty-page">
        <div className="empty-icon">❤️</div>

        <h1>Your wishlist is empty</h1>

        <p>
          Save products you love and find them here.
        </p>

        <Link to="/products" className="hero-btn">
          Explore Products
        </Link>
      </main>
    );
  }

  return (
    <main className="products-page">
      <div className="page-title">
        <p className="section-label">
          SAVED PRODUCTS
        </p>

        <h1>My Wishlist</h1>
      </div>

      <div className="product-grid">
        {wishlist.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export default Wishlist;