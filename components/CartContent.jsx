import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { cartSliceActions } from "@/provider/redux/features/cart/cartSlice";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

/**
 * CONTAINER ELEMENT FOR DISPLAYING CART PRODUCTS.
 * DISPALYS TOTAL AMOUNT.
 * DISPLAY BUTTONS TO NAVIGATE BACK TO "/products" AND TO CLEAR THE 'CART'.
 */

const CartContent = () => {
    const { cart } = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    return (
        <section className="container py-20">
            {
                cart.map((cartItem) => {
                    return <CartItem key={cartItem.id} {...cartItem} />
                })
            }
            <hr />
            <div id="link-container" className="flex justify-between gap-2 mt-8">
                <Link href="/products" className="border-transparent capitalize bg-red-500 text-white py-2 px-2 rounded-[0.25rem] tracking-wide cursor-pointer font-normal text-sm md:text-base">
                    continue shopping
                </Link>
                <button type="button" className="border-transparent capitalize bg-black text-white py-2 px-2 rounded-[0.25rem] tracking-wide cursor-pointer font-normal text-sm md:text-base"
                    onClick={() => dispatch(cartSliceActions.clearCart())}>
                    clear shopping cart
                </button>
            </div>
            <CartTotals />
        </section>
    );
}

export default CartContent;