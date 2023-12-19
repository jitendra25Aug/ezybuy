"use client";

import { createSlice } from "@reduxjs/toolkit";

/**
 * CONTAINS CART SPECIFIC STATE VALUES
 */

const getLocalStorage = () => {
    if (typeof window !== "undefined") {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        return cart;
    }
}
const initialState = { cart: getLocalStorage(), total_items: 0, total_amount: 0, shipping_fee: 600, };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Adds New Items To Shopping Cart 
        addToCart(state, action) {
            const { id, mainColor, amount, product } = action.payload;
            const tempItem = state.cart.find((item) => item.id === id);
            if (tempItem) {
                const tempCart = state.cart.map((cartItem) => {
                    if (cartItem.id === id) {
                        let newAmount = cartItem.amount + amount;
                        return { ...cartItem, amount: newAmount };
                    } else {
                        return { ...cartItem };
                    }
                })
                state.cart = tempCart;
            } else {
                const newItem = {
                    id: id, name: product.name, color: mainColor, amount, image: product.image, price: product.price,
                };
                state.cart = [...state.cart, newItem];
            }
        },

        // Removes an item from cart
        removeItem(state, action) {
            const { id } = action.payload;
            const tempCart = state.cart.filter((cartItem) => {
                return cartItem.id !== id;
            });

            state.cart = tempCart;
        },

        // toggles amount
        toggleAmount(state, action) {
            const { id, value } = action.payload;
            const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === id) {
                    if (value === "inc") {
                        let newAmount = cartItem.amount + 1;
                        return { ...cartItem, amount: newAmount };
                    }
                    if (value === "dec") {
                        let newAmount = cartItem.amount - 1;
                        if (newAmount < 1) {
                            newAmount = 1;
                        }
                        return { ...cartItem, amount: newAmount };
                    }
                } else {
                    return { ...cartItem };
                }
            });

            state.cart = tempCart;
        },

        // clear cart
        clearCart(state) {
            state.cart = [];
        },

        // Count cart total
        countCartTotals(state) {
            const { totalItems, totalAmount } = state.cart.reduce((total, cartItem) => {
                const { amount, price } = cartItem;
                total.totalItems += amount;
                total.totalAmount += amount * price;
                return total;
            }, { totalItems: 0, totalAmount: 0 });

            state.total_items = totalItems;
            state.total_amount = totalAmount
        }

    }
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice;