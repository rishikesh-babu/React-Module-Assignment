import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'dataslice',
    initialState: {
        username: null,
        products: [null],
        details: [],
        cart: [],
    },
    reducers: {
        setUsername: (state, action) => {
            // debugger
            state.username = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setDetails: (state, action) => {
            state.details = action.payload
        },
        setCart: (state, action) => {
            // debugger
            const { payload } = action
            const temp = { ...state.cart }
            if (temp[payload.id]) {
                temp[payload.id].count += 1
            } else {
                temp[payload.id] = { ...payload, count: 1 }
            }
            console.log({ temp })

            state.cart = temp
        },
        increaseQuantity: (state, action) => {
            const productId = action.payload;
            if (state.cart[productId]) {
                state.cart[productId].count += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const productId = action.payload;
            if (state.cart[productId] && state.cart[productId].count > 0) {
                state.cart[productId].count -= 1;
            }
        },
        clearCart: (state, action) => {
            state.cart = []
        }
    }
})

export default dataSlice.reducer
export const { setUsername, setProducts, setDetails, setCart, increaseQuantity, decreaseQuantity, clearCart } = dataSlice.actions