import { createSlice } from '@reduxjs/toolkit';

interface stateTypes {
  isLoading: boolean;
  errorMessage: string;
  products: [];
  cart: [];
}

// const productsData = localStorage.getItem('products');

const initialState: stateTypes = {
  isLoading: false,
  errorMessage: '',
  products: JSON.parse(localStorage.getItem('products') || '[]') || [],
  cart: JSON.parse(localStorage.getItem('cart') || '[]') || []
};

export const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // INITIALISE
    getInitialize(state) {
      state.isLoading = true;
      state.errorMessage = '';
      state.products = [];
      state.cart = []
      localStorage.clear();
    },

    setProducts(state, action) {
      state.isLoading = false;
      state.products = action.payload;
    },

    setCart(state, action) {
      state.isLoading = false;
      state.cart = action.payload;
    },

    clearCart(state) {
      localStorage.removeItem("cart");
      state.cart = [];
    },

    // SET ERRORS
    setErrors(state, action) {
      state.isLoading = false;
      state.errorMessage = action.payload.errorMessage;
    },
  },
});

export const { actions } = slice;
export const {
  startLoading,
  getInitialize,
  setErrors,
  setProducts,
  setCart,
  clearCart
} = slice.actions;

export function getProducts() {
  return async (dispatch: any) => {
    dispatch(startLoading());
    try {
      const response = await fetch("mockdata/data.json");
      const result = await response.json();
      localStorage.setItem("products", JSON.stringify(result.products));
      dispatch(setProducts(result.products));

    } catch (error) {
      dispatch(setErrors(error));
    }
  };
}

export default slice.reducer;
