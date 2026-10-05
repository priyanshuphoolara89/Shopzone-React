import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = Math.round(cartTotal * 84);

  if (cart.length === 0) {
    return (
      <main className="empty-page">
        <div className="empty-icon">🛒</div>
        <h1>Your cart is empty</h1>
        <p>Add some products to your cart.</p>

        <Link to="/products" className="hero-btn">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="page-title">
        <p className="section-label">YOUR SHOPPING BAG</p>
        <h1>Shopping Cart</h1>
      </div>

      <div className="cart-layout">
        <section className="cart-items">
          {cart.map((item) => {
            const price = Math.round(item.price * 84);

            return (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />

                <div className="cart-item-info">
                  <p className="category">
                    {item.category}
                  </p>

                  <h3>{item.title}</h3>

                  <strong>₹{price}</strong>

                  <div className="cart-actions">
                    <div className="quantity">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <aside className="summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₹{total}</strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong className="free">
              FREE
            </strong>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <strong>Included</strong>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

          <Link
            to="/checkout"
            className="checkout-btn"
          >
            Proceed to Checkout
          </Link>

          <Link
            to="/products"
            className="continue-shopping"
          >
            ← Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;