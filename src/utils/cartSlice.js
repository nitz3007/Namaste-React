import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    restaurantName: '',
    restaurantArea: '',
    items: [],
    totalItemCount: 0,
    totalBill: 0,
  },
  reducers: {
    addItem: (state, action) => {
      if(state.restaurantName && state?.restaurantName !== action.payload?.restaurantName){
        state.items = [];
        state.totalItemCount = 0;
        state.totalBill = 0;
      }
      if(!state.items.find(item => item.id === action.payload.item.id)){
        state.items.push(
          {
            name: action.payload.item.name,
            id: action.payload.item.id,
            count: 1,
            price: (action.payload.item.price/100),
          });
      }
      else {
        for (let object of state.items) {
            if (object.id === action.payload.item.id) {
                object.count += 1;
            }
        }
      }
      state.restaurantName = action.payload.restaurantName;
      state.restaurantArea = action.payload.restaurantArea;
      state.totalItemCount += 1;
      state.totalBill += action.payload.item.price;
    },
    removeItem: (state, action) => {
      if(state.items.find(item => item.id === action.payload.item.id)){
        const index = state.items.findIndex(i => i.id === action.payload.item.id)
        state.items[index].count -= 1;
        if(state.items[index].count === 0) {
          state.items.splice(index, 1);
        }
        state.totalItemCount -= 1;
        state.totalBill -= action.payload.item.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
