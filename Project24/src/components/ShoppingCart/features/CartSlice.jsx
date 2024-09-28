import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [] // Holds the cart items
  },
  reducers: {
    addRemovetoCart: (state, action) => {
      const itemInCart = state.value.find(item => item.id === action.payload.id);
      
      if (itemInCart) {
        // If the item is already in the cart, remove it
        state.value = state.value.filter(item => item.id !== action.payload.id);
      } else {
        // If the item is not in the cart, add it
        state.value.push(action.payload);
      }
    }
  }
});

export const { addRemovetoCart } = CartSlice.actions;
export default CartSlice.reducer;
