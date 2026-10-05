import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useCart } from "../context/CartContext";

function Checkout() {
  const {
    cart,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      pincode: "",
      payment: "Cash on Delivery",
    });

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      address,
      city,
      pincode,
    } = form;

    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !pincode
    ) {
      setError(
        "Please fill all delivery details."
      );

      return;
    }

    const oldOrders =
      JSON.parse(
        localStorage.getItem(
          "shopzoneOrders"
        )
      ) || [];

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: cart,
      total: Math.round(
        cartTotal * 84
      ),
      customer: form,
      status: "Confirmed",
    };

    localStorage.setItem(
      "shopzoneOrders",
      JSON.stringify([
        newOrder,
        ...oldOrders,
      ])
    );

    localStorage.removeItem(
      "shopzoneCart"
    );

    alert(
      "🎉 Order placed successfully!"
    );

    navigate("/orders");
  };

  if (cart.length === 0) {
    return (
      <main className="empty-page">
        <h1>Your cart is empty.</h1>

        <Link
          to="/products"
          className="hero-btn"
        >
          Shop Products
        </Link>
      </main>
    );
  }

  const total =
    Math.round(cartTotal * 84);

  return (
    <main className="checkout-page">
      <section className="checkout-form">
        <div className="page-title">
          <p className="section-label">
            COMPLETE YOUR ORDER
          </p>

          <h1>Checkout</h1>
        </div>

        {error && (
          <div className="form-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <h3>Delivery Information</h3>

          <label>Full Name</label>

          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />

          <label>Email</label>

          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />

          <label>Phone Number</label>

          <input
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
          />

          <label>Address</label>

          <textarea
            name="address"
            placeholder="House no., street, area"
            value={form.address}
            onChange={handleChange}
          />

          <div className="two-inputs">
            <div>
              <label>City</label>

              <input
                name="city"
                type="text"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Pincode</label>

              <input
                name="pincode"
                type="text"
                placeholder="Pincode"
                value={form.pincode}
                onChange={handleChange}
              />
            </div>
          </div>

          <label>Payment Method</label>

          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
          >
            <option>
              Cash on Delivery
            </option>

            <option>
              UPI
            </option>

            <option>
              Credit / Debit Card
            </option>
          </select>

          <button type="submit">
            Place Order — ₹{total}
          </button>
        </form>
      </section>

      <aside className="checkout-summary">
        <h2>Your Order</h2>

        {cart.map((item) => (
          <div
            className="checkout-item"
            key={item.id}
          >
            <span>
              {item.title.substring(
                0,
                28
              )}{" "}
              × {item.quantity}
            </span>

            <strong>
              ₹
              {Math.round(
                item.price *
                  84 *
                  item.quantity
              )}
            </strong>
          </div>
        ))}

        <hr />

        <div className="summary-total">
          <span>Total</span>

          <strong>
            ₹{total}
          </strong>
        </div>
      </aside>
    </main>
  );
}

export default Checkout;