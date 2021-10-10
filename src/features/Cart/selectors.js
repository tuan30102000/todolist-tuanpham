import { createSelector } from "@reduxjs/toolkit";

const productCartListSelector = (state) => state.cart.productCartListSelector

export const totalQuantitySelector = createSelector(productCartListSelector, porductlist => porductlist.reduce((x, y) => x+y.quantity , 0)
)
export const totalPriceSelector = createSelector(productCartListSelector, porductlist => porductlist.reduce((x, y) => x + y.quantity*y.product.salePrice, 0)
)