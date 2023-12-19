"use client";
import AddToCart from "@/components/AddToCart";
import LoadingIcon from "@/components/LoadingIcon";
import PageHero from "@/components/PageHero";
import ProductImage from "@/components/ProductImage";
import { productSliceActions } from "@/provider/redux/features/product/productSlice";
import { formatPrice } from "@/app/_lib/helper";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/**
 * DISPLAYS SINGLE PRODUCT DETAILS BASED ON PRODUCT ID 
 */

const SingleProductPage = ({ params }) => {
    const { single_product } = useSelector((store) => store.product);
    const dispatch = useDispatch();
    const id = params.slug;

    useEffect(() => {
        dispatch(productSliceActions.setSingleProduct({ id }));
    }, [id]);

    if (Object.keys(single_product).length === 0) {
        return <LoadingIcon />
    }

    const { id: productId, price, colors, image, name, description, company } = single_product;
    return (
        <section>
            <PageHero title={name} product />
            <div className="py-20 container page">
                <Link href="/products" className="btn">back to products</Link>
                <div className="grid gap-16 mt-8 lg:grid-cols-2 lg:items-center ">
                    <ProductImage imgUrl={image} />
                    <section className="content">
                        <h2 className="font-bold">{name}</h2>
                        <h5 className="text-red-600 lg:text-xl">{formatPrice(price)}</h5>
                        <p className="text-base text-gray-700 tracking-wide leading-loose max-w-2xl">{description}</p>
                        <p className="capitalize w-72 grid grid-cols-[125px_1fr]"><span className="font-bold">SKU : </span>{productId}</p>
                        <p className="capitalize w-72 grid grid-cols-[125px_1fr]"><span className="font-bold">Brand : </span>{company}</p>
                        <hr />
                        <AddToCart product={single_product} />
                    </section>
                </div>
            </div>
        </section>
    );
}

export default SingleProductPage;