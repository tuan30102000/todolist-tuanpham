import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/auth/userSLice';
import cartSlice from "../features/Cart/cartSlice";


const rootReducer={
    user:userReducer,
    cart:cartSlice
}
const store=configureStore({
    reducer:rootReducer
})
export default store