import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const price = Math.round(product.price * 84);

  return (
    <div className="product-card">

      <div className="product-image-box">

        <button
          className="wishlist-btn"
          onClick={() => toggleWishlist(product)}
        >
          {isWishlisted(product.id) ? "❤️" : "♡"}
        </button>

        <Link
          to={`/products/${product.id}`}
          className="product-image-link"
        >
          <img
            src={product.images?.[0] || product.thumbnail}
            alt={product.title}
            className="product-image"
          />
        </Link>

      </div>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="product-title"
        >
          {product.title}
        </Link>

        <div className="product-rating">
          ⭐ {product.rating}
        </div>

        <div className="product-bottom">

          <strong className="product-price">
            ₹{price.toLocaleString()}
          </strong>

          <button
            className="add-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;