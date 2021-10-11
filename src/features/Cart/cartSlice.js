import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isShowCart: false,
        productCartList: []
        ,
    },
    reducers: {
        showCart(state) {
            state.isShowCart = true
        },
        hiddenCart(state) {
            state.isShowCart = false
        },
        addToCart(state, action) {
            // const newState = [...state.productCartList]
            // let index = newState.findIndex(item => item.productId === action.payload.productId)

            
            // if (index < 0) {
            //     newState.push(action.payload)
            // } else newState[index].quantity = newState[index].quantity + action.payload.quantity
            // state.productCartList=newState
            // return state
            let index = state.productCartList.findIndex(item => item.productId === action.payload.productId)

            
            if (index < 0) {
                state.productCartList.push(action.payload)
            } else state.productCartList[index].quantity +=   action.payload.quantity
        },
        removeCart(state, action) {
            let index = state.productCartList.findIndex(item => item.productId === action.payload)
            state.splice(index, 1)
        },
        changeQuantity(state, action) {
            let index = state.productCartList.findIndex(item => item.productId === action.payload.productId)
            state[index].quantity = action.payload.quantity
        },
    }

})


const { reducer, actions } = cartSlice
export const { showCart, hiddenCart, addToCart, removeCart, changeQuantity } = actions;

export default reducer