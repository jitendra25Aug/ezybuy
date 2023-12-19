import { FaMinus, FaPlus } from "react-icons/fa";

/**
 * DISPLAYS BUTTONS TO 'INCREASE' OR 'DECREASE' PRODUCT QUANTITY
 */

const AmountButtons = ({ amount, increase, decrease, isCartUI }) => {
    return (
        <div className={`grid grid-cols-3 items-center justify-items-center ${isCartUI ? 'w-20 md:w-[100px]' : 'w-36'}`}>
            <button className={`border-none bg-none cursor-pointer py-4 flex justify-center items-center active:border active:border-red-500 ${isCartUI ? 'w-4 h-2 text-xs md:w-6 md:h-4 md:text-base' : 'w-8 h-4'}`}
                onClick={decrease}>
                <FaMinus />
            </button>
            <h2 className={`mb-0 font-bold ${isCartUI ? 'text-base md:text-2xl' : ''}`}>{amount}</h2>
            <button className={`border-none bg-none cursor-pointer py-4 flex justify-center items-center active:border active:border-red-500 ${isCartUI ? 'w-4 h-2 text-xs' : 'w-8 h-4'}`}
                onClick={increase}>
                <FaPlus />
            </button>
        </div>
    );
}

export default AmountButtons;