
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { cartSliceActions } from "@/provider/redux/features/cart/cartSlice";
import { useState } from "react";
import Link from "next/link";
import AmountButtons from "./AmountButtons";

/**
 * DISPLAYS BUTTONS TO 'INCREASE' OR 'DECREASE' A PRODUCT QUANTITY
 * DISPLAYS BUTTON TO ADD THE PRODUCT TO A USER CART
 * NAVIAGATES USER TO "/cart" ROUTE.
 */

const AddToCart = ({product}) => {
    const { id, colors } = product;
    const dispatch = useDispatch();

    const [mainColor, setMainColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const increase = () => {
        setAmount((prevAmount) => {
            let tempAmount = prevAmount + 1;
            return tempAmount;
        })
    }

    const decrease = () => {
        setAmount((prevAmount) => {
            let tempAmount = prevAmount - 1;
            if (tempAmount < 1) {
                tempAmount = 1;
            }
            return tempAmount;
        })
    }

    return (
        <section className="mt-8">
            <div id="colors" className="grid grid-cols-[125px_1fr] items-center mb-4">
                <span className="capitalize font-bold">colors : </span>
                <div className="flex">
                    {colors.map((color, index) => {
                        return (
                            <button key={index} style={{ backgroundColor: color }} onClick={() => setMainColor(color)}
                                className={`w-6 h-6 rounded-full border-none bg-slate-500 mr-2 cursor-pointer flex justify-center items-center ${mainColor === color ? 'opacity-100' : 'opacity-50' }`} >
                                {mainColor === color ? <FaCheck className="text-xs text-white" /> : null}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div id="btn-container" className="mt-8">
                <AmountButtons amount={amount} increase={increase} decrease={decrease} />
                <Link href="/cart" className="btn mt-4 w-36" onClick={() => dispatch(cartSliceActions.addToCart({id, mainColor, amount, product}))}>add to cart</Link>
            </div>
        </section>
    );
}

export default AddToCart;