"use client";

import { useSelector } from "react-redux";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import CheckoutForm from "@/components/CheckoutForm";

/**
 * DISPLAYS THE CHECKOUT FORM
 * NAVIGATES USER BACK TO HOME PAGE AFTER FILLING CHECKOUT FORM
 */

const CheckoutPage = () => {
    const { cart } = useSelector((store) => store.cart);
    return (
        <>
            <PageHero title="checkout" />
            {
                (!cart || cart.length === 0) ? (<div className="page flex justify-center items-center bg-red-800">
                    <div className="text-center">
                        <h2>your cart is empty</h2>
                        <Link href="/products" className="btn">fill it</Link>
                    </div>
                </div>
                ) : <CheckoutForm />
            }
        </>
    );
}

export default CheckoutPage;