import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Loader from "../components/Loader";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.error(error);
        setError("Product load nahi ho paaya.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error || !product) {
    return (
      <div className="error-page">
        <h2>⚠️ {error || "Product not found"}</h2>
      </div>
    );
  }

  const price = Math.round(product.price * 84);

  return (
    <main className="product-details-page">
      <div className="container">

        <div className="product-details">

          {/* IMAGE */}

          <div className="product-details-image">

            <img
              src={product.images?.[0] || product.thumbnail}
              alt={product.title}
            />

          </div>

          {/* INFORMATION */}

          <div className="product-details-info">

            <p className="product-category">
              {product.category}
            </p>

            <h1>{product.title}</h1>

            <div className="product-details-rating">
              ⭐ {product.rating}
            </div>

            <h2 className="product-details-price">
              ₹{price.toLocaleString()}
            </h2>

            <p className="product-description">
              {product.description}
            </p>

            <p>
              <strong>Brand:</strong>{" "}
              {product.brand || "N/A"}
            </p>

            <p>
              <strong>Stock:</strong>{" "}
              {product.stock} available
            </p>

            <div className="product-details-buttons">

              <button
                className="add-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

              <button
                className="wishlist-btn-details"
                onClick={() => toggleWishlist(product)}
              >
                {isWishlisted(product.id)
                  ? "❤️ Remove Wishlist"
                  : "♡ Add to Wishlist"}
              </button>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}

export default ProductDetails;