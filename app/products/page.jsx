import PageHero from "@/components/PageHero";
import ProductList from "@/components/ProductList";

/**
 * CONTAINER ELEMENT FOR ALL PRODUCTS
 */

const ProductsPage = () => {
    return (
        <>
            <PageHero title="products" />
            <div className="page">
                <div className="container my-16">
                    <ProductList />
                </div>
            </div>
        </>
    );
}

export default ProductsPage;