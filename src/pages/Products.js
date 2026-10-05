import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory =
    searchParams.get("category") || "all";

  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(200000);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        let url = "https://dummyjson.com/products?limit=0";

        if (selectedCategory !== "all") {
          url = `https://dummyjson.com/products/category/${selectedCategory}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Products load failed");
        }

        const data = await response.json();

        setProducts(data.products || []);
      } catch (error) {
        console.error(error);
        setError("Products load nahi ho paaye.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategory]);

  function handleCategoryChange(e) {
    const value = e.target.value;

    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: value,
      });
    }

    setSearch("");
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const priceInRupees = product.price * 84;

    const matchesPrice =
      priceInRupees <= maxPrice;

    return matchesSearch && matchesPrice;
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error-page">
        <h2>⚠️ {error}</h2>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <main className="products-page">

      <div className="container">

        {/* HEADER */}

        <div className="page-header">

          <h1>
            {selectedCategory === "all"
              ? "All Products"
              : selectedCategory
                  .split("-")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() +
                      word.slice(1)
                  )
                  .join(" ")}
          </h1>

          <p>
            Find the perfect products for you.
          </p>

        </div>


        {/* FILTERS */}

        <div className="filters">

          {/* SEARCH */}

          <div className="filter-group">

            <label>
              Search
            </label>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          {/* CATEGORY */}

          <div className="filter-group">

            <label>
              Category
            </label>

            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
            >

              <option value="all">
                All Categories
              </option>

              <option value="mens-shirts">
                Men's Clothing
              </option>

              <option value="womens-dresses">
                Women's Clothing
              </option>

              <option value="womens-jewellery">
                Jewellery
              </option>

              <option value="laptops">
                Laptops
              </option>

              <option value="smartphones">
                Smartphones
              </option>

              <option value="tablets">
                Tablets
              </option>

            </select>

          </div>


          {/* PRICE */}

          <div className="filter-group">

            <label>
              Max Price: ₹
              {maxPrice.toLocaleString()}
            </label>

            <input
              type="range"
              min="500"
              max="200000"
              step="500"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(
                  Number(e.target.value)
                )
              }
            />

          </div>

        </div>


        {/* RESULT */}

        <div className="product-result-info">

          <p>
            Showing{" "}
            <strong>
              {filteredProducts.length}
            </strong>{" "}
            products
          </p>

        </div>


        {/* PRODUCTS */}

        {filteredProducts.length === 0 ? (

          <div className="empty-state">

            <h2>
              No products found
            </h2>

            <p>
              Try changing your search
              or filters.
            </p>

          </div>

        ) : (

          <div className="products-grid">

            {filteredProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            )}

          </div>

        )}

      </div>

    </main>
  );
}

export default Products;