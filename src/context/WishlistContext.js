import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem(
      "shopzoneWishlist"
    );

    return saved ? JSON.parse(saved) : [];
  });

  const toggleWishlist = (product) => {
    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    let newWishlist;

    if (exists) {
      newWishlist = wishlist.filter(
        (item) => item.id !== product.id
      );
    } else {
      newWishlist = [...wishlist, product];
    }

    setWishlist(newWishlist);

    localStorage.setItem(
      "shopzoneWishlist",
      JSON.stringify(newWishlist)
    );
  };

  const isWishlisted = (id) => {
    return wishlist.some(
      (item) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}