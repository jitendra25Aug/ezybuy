"use client";

import { productSliceActions } from "@/provider/redux/features/product/productSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/**
 * ALLOWS USER TO SEARCH FOR A SPECIFIC PRODUCT AND NAVIGATE DIRECTLY TO THAT PRODUCT ROUTE.
 */

const SearchProduct = ({ isActive, setActive }) => {
    const { searchProductStr, filteredProductNames } = useSelector((store) => store.product);
    const dispatch = useDispatch();
    console.log("inside search");

    const handleInputChange = (e) => {
        dispatch(productSliceActions.setSearchProductStr(e.target.value));
    }

    useEffect(() => {
        console.log("inside use", filteredProductNames, "filtername : ", searchProductStr);
        let timer;
        timer = setTimeout(() => {
            dispatch(productSliceActions.setFilteredProductNames(searchProductStr));
        }, 300);
        setActive();
        return () => {
            clearTimeout(timer);
        };
    }, [searchProductStr]);

    return (
        <form onSubmit={(e) => { e.preventDefault(); }} className="w-full relative">
            <div id="input-container" className="flex justify-between w-full" >
                <div className="w-full">
                    {/* <input type="text" title="Search for Products" name="" id="" placeholder="Search for Products" value={ } onChange={() => { }} /> */}
                    <input type="text" title="Search for Products" id="search" placeholder="Search for Products" className="px-3 w-full h-10 bg-transparent text-lg text-ellipsis outline-none outline-0"
                        value={searchProductStr} onChange={handleInputChange} />
                </div>
                <button type="submit" aria-label="Search for Products" title="Search for Products" className="h-10 rounded-sm p-2 bg-transparent">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>Search Icon</title>
                        <path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421
                                 6.35786 18 10.5 18Z" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>
            {
                isActive && (
                    <ul id="search-list" className="absolute block w-full top-9 bg-white shadow-md px-3 rounded-b-md">
                        {
                            filteredProductNames.map((product, i) => {
                                return (
                                    <li key={i} className="my-2 flex items-center text-base capitalize">
                                        <Link href={`/products/${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                )
            }
        </form>
    );
}

export default SearchProduct;