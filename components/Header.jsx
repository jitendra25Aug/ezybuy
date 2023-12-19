"use client";

import Link from "next/link";
import { useState } from "react";
import CartButton from "./CartButton";
import SearchProduct from "./SearchProduct";

/**
 * RENDERS THE HEADER UI
 * CONTAINS 'cart' BUTTON TO NAVIGATE TO '/cart' ROUTE.
 * ALLOWS USER TO SEARCH FOR A SPECIFIC PRODUCT.
 */

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleChange = (e) => {
        console.log(e.currentTarget, e.target, e.target.localName !== "li");
        if (e.target.localName !== "li" || e.target.localName !== "ul" || e.target.localName !== "input" || e.target.localName !== "svg") {
            setIsActive(false);
        }
    }

    const setActive = () => {
        setIsActive(true);
    }
    return (
        <div className="container grid justify-items-end items-center grid-cols-2 gap-y-4 lg:flex lg:justify-between lg:items-center"
            onClick={handleChange}>
            <div id="logo-container" className="justify-self-start">
                <Link href="/" className="text-3xl font-semibold text-shadow font-orbitron">
                    EZY<span className="text-red-700">BUY</span>
                </Link>
            </div>
            <div id="search-bar" className="w-full border bg-gray-100 rounded-lg row-start-2 col-span-full lg:basis-1/2">
                <SearchProduct isActive={isActive} setActive={setActive} />
            </div>
            <CartButton />
        </div>
    );
}

export default Header;