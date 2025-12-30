import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalAmount: 0 },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalAmount += item.price;
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((i) => i.id === itemId);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== itemId);
        state.totalAmount -= existingItem.price * existingItem.quantity;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
