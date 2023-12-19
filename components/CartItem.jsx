import { useDispatch } from "react-redux";
import { formatPrice } from "@/app/_lib/helper";
import { cartSliceActions } from "@/provider/redux/features/cart/cartSlice";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";

/**
 * RENDERS DETAILS OF SINGLE CART ITEM
 */

const CartItem = ({ id, name, color, amount, image, price }) => {
    const dispatch = useDispatch();
    const increase = () => {
        dispatch(cartSliceActions.toggleAmount({ id, value: 'inc' }));
    }
    const decrease = () => {
        dispatch(cartSliceActions.toggleAmount({ id, value: 'dec' }));
    }

    return (
        <article className="grid grid-cols-[1fr_1fr] grid-rows-[75px] gap-x-4 gap-y-4 justify-items-center items-center mb-12 md:grid-cols-[1fr_1fr_1fr_1fr_1fr] md:gap-x-12">
            <div className="grid grid-cols-[75px_125px] grid-rows-[75px] items-center gap-4 text-left md:h-full">
                <img src={image} alt={name} className="w-full h-full block rounded-md object-cover" />
                <div>
                    <h5 className="text-xs mb-0 md:text-sm">{name}</h5>
                    <p className="text-gray-500 text-xs tracking-wide capitalize mb-0 flex items-center justify-start md:text-sm">
                        color :
                        <span className="inline-block w-2 h-2 ml-2 bg-red-500 rounded-md md:w-3 md:h-3" style={{ backgroundColor: color }}></span>
                    </p>
                    <h5 className="text-red-500 mb-0 md:hidden">{formatPrice(price)}</h5>
                    <div className="md:hidden">
                        <AmountButtons amount={amount} increase={increase} decrease={decrease} isCartUI={true} />
                    </div>
                </div>
            </div>
            <h5 className="hidden md:block text-red-500 font-normal text-base">{formatPrice(price)}</h5>
            <div className="hidden md:block ">
                <AmountButtons amount={amount} increase={increase} decrease={decrease} isCartUI={true} />
            </div>
            <h5 className="hidden md:block text-gray-500 font-normal text-base">{formatPrice(price * amount)}</h5>
            <button type="button" className="w-6 h-6 text-white bg-red-800 border-transparent flex justify-center items-center rounded-md text-xs cursor-pointer"
                onClick={() => dispatch(cartSliceActions.removeItem({ id }))}><FaTrash /> </button>
        </article>
    );
}

export default CartItem;