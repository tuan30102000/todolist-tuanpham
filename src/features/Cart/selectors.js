import { createSelector } from "@reduxjs/toolkit";

const productCartListSelector = (state) => state.cart.productCartList
export const totalQuantitySelector = createSelector(productCartListSelector, porductlist => porductlist.reduce((x, y) => x + y.quantity, 0)
)
export const totalPriceSelector = createSelector(productCartListSelector, porductlist => porductlist.reduce((x, y) => x + y.quantity * y.productInfo.salePrice, 0)
)