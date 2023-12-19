import { products } from "@/app/_lib/data";
import { createSlice } from "@reduxjs/toolkit";

/**
 * CONTAINS PRODUCT SPECIFIC STATE VALUES
 */

const initialState = {
    products: [...products],
    filtered_products: [...products],
    single_product: {},
    searchProductStr: '',
    filteredProductNames: [],
    showFilteredNames: false,
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // Will be used for filtering products based on category
        setFilterProducts(state, action) {
            state.filtered_products = [...action.payload];
        },

        setSingleProduct(state, action) {
            const id = action.payload.id;
            state.single_product = state.filtered_products.filter((product) => {
                return product.id === id;
            })[0];
        },

        setSearchProductStr(state, action) {
            state.searchProductStr = action.payload;
        },

        setFilteredProductNames(state, action) {
            const searchQuery = action.payload;
            if (searchQuery.length > 0) {
                const allNames = state.products.filter((product) => {
                    if (product.name.toLowerCase().includes(searchQuery)) {
                        return product.name;
                    }
                });
                state.filteredProductNames = allNames;
            } else {
                state.filteredProductNames = [];
            }
        },

        setShowFilteredNames(state, action) {
            state.showFilteredNames = action.payload;
        }
    }
});

export const productSliceActions = productSlice.actions;
export default productSlice;