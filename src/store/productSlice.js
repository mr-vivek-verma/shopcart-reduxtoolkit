const { createSlice } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  SUCCESS: "Success",
  ERROR: "Error",
  LOADING: "Loading",
});
//here trying to get the status of data like loading,successful or error.Since in status we have to pass string so we will use ENUM concept but in javascript we can do or make machanism using "object" because ENUM concept sirf TypeScript me hota hai.
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
  // remove(state, action) {
  //   //here we are trying to remove the item from the array
  //   return state.filter((item) => item.id !== action.payload);
  // },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// thunks concept (since we directly can not use or get data by calling fetch API inside reducer )
// thunk is a normal function
export function fetchProducts() {
  // here will return a new function
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
