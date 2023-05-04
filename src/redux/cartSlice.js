import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    selectedPizza: "",
    image: "",
    size: "",
    toppings: [],
    quantity: 1,
  },
  reducers: {
    setSelectedPizza: (state, action) => {
        state.selectedPizza = action.payload;
    },
    setPizzaImage: (state, action) => {
        state.image = action.payload;
    },
    setPizzaSize: (state, action) => {
      state.size = action.payload;
    },
    setPizzaToppings: (state, action) => {
      state.toppings = action.payload;
    },
    updateQuantity : (state,action) =>{
        state.quantity += 1;
    }
  },
});

export const { setSelectedPizza, setPizzaImage, setPizzaSize, setPizzaToppings, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;