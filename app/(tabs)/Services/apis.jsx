// services/api.js
import axios from "axios";

const API_URL = "https://fakestoreapi.com";

// Fetch products from fake API
export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

// Fake cart storage
let fakeCart = [];

// Add item to fake cart
export const addItemToFakeCart = (item) => {
  const exist = fakeCart.find((i) => i.id === item.id);
  if (exist) {
    exist.quantity += 1;
  } else {
    fakeCart.push({ ...item, quantity: 1 });
  }
};

// Simulate API call for add to cart
export const addToCart = async (item) => {
  return { ...item, quantity: 1 };
};

// Get cart items
export const getCartItems = () => {
  return fakeCart;
};

// Update cart item quantity
export const updateCartItem = (id, quantity) => {
  fakeCart = fakeCart.map((item) =>
    item.id === id ? { ...item, quantity } : item
  );
  return fakeCart.find((item) => item.id === id);
};

// Delete cart item
export const deleteCartItem = (id) => {
  fakeCart = fakeCart.filter((item) => item.id !== id);
  return { success: true };
};
