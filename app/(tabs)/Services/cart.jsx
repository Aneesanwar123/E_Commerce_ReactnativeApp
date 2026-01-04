// Services/cart.js
let cartItems = [];

export const addToCart = (product) => {
  const exist = cartItems.find((item) => item.id === product.id);
  if (exist) {
    exist.quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }
};

export const getCartItems = () => cartItems;

export const updateCartItem = (id, quantity) => {
  cartItems = cartItems.map((item) =>
    item.id === id ? { ...item, quantity } : item
  );
};

export const clearCart = () => {
  cartItems = [];
};
