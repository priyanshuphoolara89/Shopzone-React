import { Link } from "react-router-dom";

function Orders() {
  const orders =
    JSON.parse(
      localStorage.getItem(
        "shopzoneOrders"
      )
    ) || [];

  if (orders.length === 0) {
    return (
      <main className="empty-page">
        <div className="empty-icon">
          📦
        </div>

        <h1>No orders yet</h1>

        <p>
          Your placed orders will appear here.
        </p>

        <Link
          to="/products"
          className="hero-btn"
        >
          Start Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="orders-page">
      <div className="page-title">
        <p className="section-label">
          YOUR PURCHASES
        </p>

        <h1>Order History</h1>
      </div>

      <div className="orders-list">
        {orders.map((order) => (
          <div
            className="order-card"
            key={order.id}
          >
            <div className="order-header">
              <div>
                <p>Order ID</p>

                <strong>
                  #{order.id}
                </strong>
              </div>

              <div>
                <p>Date</p>

                <strong>
                  {order.date}
                </strong>
              </div>

              <span className="order-status">
                {order.status}
              </span>
            </div>

            <div className="order-products">
              {order.items.map(
                (item) => (
                  <div
                    className="order-product"
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div>
                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        Quantity:{" "}
                        {item.quantity}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="order-total">
              <span>
                Order Total
              </span>

              <strong>
                ₹{order.total}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Orders;