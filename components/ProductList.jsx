"use client";

import { useSelector } from "react-redux";
import Product from "./Product";

/**
 * RENDERS ALL THE AVAILABLE PRODUCTS
 */

const ProductList = () => {
    const { filtered_products } = useSelector((store) => store.product);
    return (
        <section>
            <div className="grid gap-x-8 gap-y-6 lg:grid-cols-2 xl:grid-cols-3">
                {
                    filtered_products &&
                    filtered_products.map((product) => {
                        return <Product key={product.id} {...product} />
                    })
                }
            </div>
        </section>
    );
}

export default ProductList;