// CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalQuantity: 0,
    total:0
};

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addTOCart(state,action){
            const newItem=action.payload;
            const itemindex=state.products.find(item => item.id===newItem.id);
            if(itemindex){
                itemindex.quantity++;
                itemindex.total += newItem.price;
            }else{
                state.products.push({id:newItem.id, quantity:1,name:newItem.name, price:newItem.price,total:newItem.price,image:newItem.image});
            }
            state.total+=newItem.price;
            state.totalQuantity++;
        },
        removefromcart(state,action){
            const itemId = action.payload.id;
            const itemIndex = state.products.findIndex(item => item.id === itemId);
            if (itemIndex > -1) {
                const itemToRemove = state.products[itemIndex];
                state.products.splice(itemIndex, 1);
                state.total -= itemToRemove.price * itemToRemove.quantity;
                state.totalQuantity -= itemToRemove.quantity;
            }
        },
    increasequantity(state,action){
        const itemId = action.payload.id;
        const itemIndex = state.products.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            const itemToUpdate = state.products[itemIndex];
            itemToUpdate.quantity++;
            itemToUpdate.total += itemToUpdate.price;
            state.total += itemToUpdate.price;  // Update the total price of the cart
            state.totalQuantity++;
        }
    },
    decreasequantity(state,action){
        const itemId = action.payload.id;
        const item = action.payload;
        const itemIndex = state.products.findIndex(item => item.id === itemId);
        const itemToUpdate = state.products[itemIndex];
        if(itemToUpdate.quantity >1){
            if (itemIndex > -1) {
                const itemToUpdate = state.products[itemIndex];
                itemToUpdate.quantity--;
                itemToUpdate.total -= itemToUpdate.price;
                state.total -= itemToUpdate.price;  // Update the total price of the cart
                state.totalQuantity--;
            }

        }
       
         

        
     
    }

        
       
    } 
});

export default cartSlice.reducer;  
export  const {addTOCart,removefromcart,increasequantity,decreasequantity}=cartSlice.actions
