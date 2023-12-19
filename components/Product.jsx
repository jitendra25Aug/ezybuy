import { formatPrice } from "@/app/_lib/helper";
import Link from "next/link";

/**
 * DISPLAYS THE DETAILS OF A SINGLE PRODUCT USED IN PRODUCT LIST
 */

const Product = ({ image, name, price, id }) => {
    return (
        <article className="pb-4 hover:shadow-xl hover:shadow-slate-200">
            <div id="img-container" className="relative bg-black rounded-md ">
                <Link href={`/products/${id}`} className="bg-white">
                    <img src={image} alt={name} className="block w-full h-44 object-cover object-center rounded-md transition-linear" />
                </Link>
            </div>
            <footer className="mt-4 px-4 flex justify-between items-center">
                <h5 className="mb-0 font-normal">{name}</h5>
                <p className="mb-0 font-normal tracking-widest text-red-600">{formatPrice(price)}</p>
            </footer>
        </article>
    );
}

export default Product;