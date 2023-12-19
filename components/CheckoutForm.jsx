"use client";

import { cartSliceActions } from "@/provider/redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

/**
 * DISPLAYS THE CHECKOUT FORM.
 * NAVIGATES USER BACK TO HOME PAGE AFTER SUBMITTING THE FORM.
 */

const CheckoutForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setTimeout(()=>{
            router.push('/');
            dispatch(cartSliceActions.clearCart());
        }, 2000);
    }
    return (
        <section className="page container flex justify-center items-center">
            <div className="border-2 border-gray-800 max-w-full p-11 m-4 rounded-xl">
                <h1 className="mb-12 text-center font-semibold">Payment Details</h1>
                <form onSubmit={handleSubmit} className="text-center">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12 text-left">
                        <div className="col-span-full flex flex-col gap-1">
                            <label htmlFor="name" className="font-semibold text-lg">Name</label>
                            <input type="text" id="name" placeholder="Name" className="py-2 px-4 text-base border-2 border-black rounded-xl" required />
                        </div>
                        <div className="col-span-full flex flex-col">
                            <label htmlFor="card-number" className="font-semibold text-lg">Card Number</label>
                            <input type="tel" id="card-number" maxLength="16" placeholder="0000 0000 0000 0000"
                                className="py-2 px-4 text-base border-2 border-black rounded-xl" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="expiration-date" className="font-semibold text-lg">Expiration Date</label>
                            <input type="tel" id="expiration-date" maxLength="4" placeholder="00/00"
                                className="py-2 px-4 text-base border-2 border-black rounded-xl" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="cvc-number" className="font-semibold text-lg">CVC</label>
                            <input type="tel" id="cvc-number" step="1" maxLength="3" placeholder="XXX"
                                className="py-2 px-4 text-base border-2 border-black rounded-xl" required />
                        </div>
                    </div>
                    <button type="submit" className="btn text-lg px-20 rounded-xl">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default CheckoutForm;