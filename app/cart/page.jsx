"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import PageHero from "@/components/PageHero";
import CartContent from "@/components/CartContent";

/**
 * DISPLAYS THE DIFFERENT CART UI OF BASED ON THE "CART" VALUE
 */

const CartPage = () => {
    const { cart } = useSelector((store) => store.cart);

    if (!cart || !cart.length) {
        return (
            <div className="page-100">
                <div className="text-center">
                    <h2 className="mb-4 normal-case font-bold">Your cart is empty</h2>
                    <Link href="/products" className="btn">fill it</Link>
                </div>
            </div>
        )
    }
    return (
        <div>
            <PageHero title="cart" />
            <div className="page">
                <CartContent />
            </div>
        </div>
    );;
}

export default CartPage;