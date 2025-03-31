import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    searchterm:'',
    filteredData:[],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct(state, action) {
            state.products = action.payload;
        },
        setsearchterm(state,action){
            state.searchterm = action.payload;
            state.filteredData = state.products.filter(product => product.name.toLowerCase().includes(state.searchterm.toLowerCase()));
            
        }
    },
});

export const { setProduct,setsearchterm } = productSlice.actions;
export default productSlice.reducer;  // Default export for the reducer
