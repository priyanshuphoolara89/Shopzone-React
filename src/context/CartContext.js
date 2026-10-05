import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shopzoneCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem(
      "shopzoneCart",
      JSON.stringify(newCart)
    );
  };

  const addToCart = (product) => {
    const existing = cart.find(
      (item) => item.id === product.id
    );

    let newCart;

    if (existing) {
      newCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      newCart = [
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    saveCart(newCart);
  };

  const removeFromCart = (id) => {
    saveCart(
      cart.filter((item) => item.id !== id)
    );
  };

  const increaseQuantity = (id) => {
    saveCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    const newCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    saveCart(newCart);
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}