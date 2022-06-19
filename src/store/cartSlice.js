import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    totalQuantity: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const itemExist = state.items.find(
                item => item.id === newItem.id
            )
            state.totalQuantity++;
            if (itemExist) {
                itemExist.quantity++;
                itemExist.totalPrice = itemExist.totalPrice + itemExist.price;

            } else {
                state.items.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.name })
            }

        },
        removeItemFromCart: (state, action) => {
            const id = action.payload;
            state.totalQuantity--;
            const existingItem = state.items.find(item => item.id === id)
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        },
        emptyCart(state) {
            state.items = [];
            state.totalQuantity = 0;
        }
    }
});
const sendCartData = (cartData) => {
    return (dispatch) => {
        //dispatch data
        dispatch();
        ///call api
    }
}
export default cartSlice;
export const cartActions = cartSlice.actions;