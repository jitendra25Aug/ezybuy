"use client";

import { cartSliceActions } from "@/provider/redux/features/cart/cartSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/**
 * DISPLAYS THE CART ICON.
 * UPDATES REDUX STATE TO 'INCREASE' OR 'DECREASE' PRODUCT QUANTITIES AND TOTAL AMOUNT.
 * SAVES 'CART' DETAILS TO LOCALSTORAGE.
 */

const CartButton = () => {
    const { total_items, cart } = useSelector((store)=>store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartSliceActions.countCartTotals());
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <div>
            <Link href="/cart" className="flex items-center">
                Cart <span id="cart-icon-container" className="relative flex items-center">
                    <img src="/assets/images/header_cart.svg" alt="Cart" width="24" height="24" className="ml-1 text-2xl" />
                    <span className="absolute -top-3 -right-3 bg-stone-500 text-white w-3 h-3 rounded-full text-xs p-3 flex justify-center items-center">{total_items}</span>
                </span>
            </Link>
        </div>
    );
}

export default CartButton;