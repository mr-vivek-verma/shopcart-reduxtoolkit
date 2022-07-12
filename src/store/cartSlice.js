const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      //here with the help of createSlice feature we are able to mutate the state directly.
      state.push(action.payload);
    },
    remove(state, action) {
      //here we are trying to remove the item from the array
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
