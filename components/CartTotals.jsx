import Link from "next/link";
import { useSelector } from "react-redux";
import { formatPrice } from "@/app/_lib/helper";

/**
 * CALCULATES AND DISPLAYS THE ORDER TOTAL.
 * DISPLAY THE 'CHECKOUT' BUTTON.
 */

const CartTotals = () => {
    const { total_amount, shipping_fee } = useSelector((store) => store.cart);

    return (
        <section className="mt-12 flex justify-center md:justify-end">
            <div className="w-full md:w-min">
                <article className="border border-gray-700 rounded-md py-6 px-6 md:px-12">
                    <h5 className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr]">subtotal : <span>{formatPrice(total_amount)}</span></h5>
                    <p className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] capitalize">shipping fee : <span>{formatPrice(shipping_fee)}</span></p>
                    <hr />
                    <h4 className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] mt-8 text-base md:text-xl">order total :  <span>{formatPrice(total_amount + shipping_fee)}</span></h4>
                </article>
                <Link href="/checkout" className="btn mt-4 w-full text-center font-bold">proceed to checkout</Link>
            </div>
        </section>
    );
}

export default CartTotals;