import { Link } from "react-router-dom";

function Home() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            ✨ WELCOME TO SHOPZONE
          </p>

          <h1>
            Shop smarter.
            <br />
            <span>Live better.</span>
          </h1>

          <p>
            Discover quality products, great prices
            and a shopping experience made for you.
          </p>

          <div className="hero-buttons">

            <Link
              to="/products"
              className="hero-btn"
            >
              Explore Products →
            </Link>

            <Link
              to="/products"
              className="hero-secondary-btn"
            >
              View Deals
            </Link>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-circle">
            🛍️
          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features">

        <div className="feature-card">
          <span>🚚</span>

          <div>
            <h3>Fast Delivery</h3>
            <p>
              Get your products delivered quickly.
            </p>
          </div>
        </div>


        <div className="feature-card">
          <span>🔒</span>

          <div>
            <h3>Secure Shopping</h3>
            <p>
              Your information stays protected.
            </p>
          </div>
        </div>


        <div className="feature-card">
          <span>↩️</span>

          <div>
            <h3>Easy Returns</h3>
            <p>
              Hassle-free returns and support.
            </p>
          </div>
        </div>


        <div className="feature-card">
          <span>🎧</span>

          <div>
            <h3>24/7 Support</h3>
            <p>
              We're here to help anytime.
            </p>
          </div>
        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="home-category">

        <p className="section-label">
          SHOP BY CATEGORY
        </p>

        <h2>
          Find what you need
        </h2>

        <p className="section-description">
          Explore our popular categories and discover
          something you'll love.
        </p>


        <div className="category-showcase">

          <Link to="/products?category=mens-shirts">
            <span>👔</span>
            <h3>Men's Clothing</h3>
            <p>Shirts & fashion</p>
          </Link>


          <Link to="/products?category=womens-dresses">
            <span>👗</span>
            <h3>Women's Clothing</h3>
            <p>Dresses & fashion</p>
          </Link>


          <Link to="/products?category=womens-jewellery">
            <span>💍</span>
            <h3>Jewellery</h3>
            <p>Jewellery & accessories</p>
          </Link>


          <Link to="/products?category=laptops">
            <span>💻</span>
            <h3>Electronics</h3>
            <p>Laptops & technology</p>
          </Link>

        </div>

      </section>


      {/* ================= TRENDING ================= */}

      <section className="trending-section">

        <div className="section-heading">

          <div>
            <p className="section-label">
              🔥 TRENDING NOW
            </p>

            <h2>
              Popular right now
            </h2>

            <p>
              Check out what shoppers are loving today.
            </p>
          </div>

          <Link
            to="/products"
            className="view-all-btn"
          >
            View All →
          </Link>

        </div>


        <div className="trending-grid">

          <Link
            to="/products?category=smartphones"
            className="trend-card trend-purple"
          >
            <div>
              <span>📱</span>
              <h3>Smartphones</h3>
              <p>Upgrade your everyday tech</p>
              <strong>Shop Now →</strong>
            </div>
          </Link>


          <Link
            to="/products?category=laptops"
            className="trend-card trend-blue"
          >
            <div>
              <span>💻</span>
              <h3>Laptops</h3>
              <p>Power your work & creativity</p>
              <strong>Shop Now →</strong>
            </div>
          </Link>


          <Link
            to="/products?category=mens-shoes"
            className="trend-card trend-orange"
          >
            <div>
              <span>👟</span>
              <h3>Men's Shoes</h3>
              <p>Step into something new</p>
              <strong>Shop Now →</strong>
            </div>
          </Link>

        </div>

      </section>


      {/* ================= OFFER BANNER ================= */}

      <section className="offer-section">

        <div className="offer-content">

          <p>
            ⚡ LIMITED TIME OFFER
          </p>

          <h2>
            Upgrade your style.
            <br />
            Save more today.
          </h2>

          <span>
            Discover amazing products at prices you'll love.
          </span>

          <Link
            to="/products"
            className="offer-btn"
          >
            Shop Deals →
          </Link>

        </div>

        <div className="offer-visual">
          🎁
        </div>

      </section>


      {/* ================= WHY SHOPZONE ================= */}

      <section className="why-section">

        <div className="section-heading center-heading">

          <p className="section-label">
            WHY SHOPZONE
          </p>

          <h2>
            Shopping made simple
          </h2>

          <p>
            Everything you need for a better online
            shopping experience.
          </p>

        </div>


        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">💎</div>
            <h3>Quality Products</h3>
            <p>
              Carefully selected products from
              trusted categories.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">💰</div>
            <h3>Great Prices</h3>
            <p>
              Find products that fit your budget
              without compromising quality.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">❤️</div>
            <h3>Customer First</h3>
            <p>
              Your shopping experience is always
              our top priority.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">🚀</div>
            <h3>Easy Experience</h3>
            <p>
              Simple browsing, quick checkout
              and easy order tracking.
            </p>
          </div>

        </div>

      </section>


      {/* ================= NEWSLETTER ================= */}

      <section className="newsletter-section">

        <div className="newsletter-content">

          <span className="newsletter-icon">
            📬
          </span>

          <h2>
            Get the latest deals
          </h2>

          <p>
            Subscribe and stay updated with new
            products and special offers.
          </p>

          <div className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

          <small>
            No spam. Unsubscribe anytime.
          </small>

        </div>

      </section>

    </main>
  );
}

export default Home;