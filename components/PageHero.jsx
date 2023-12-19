import Link from "next/link";

/**
 * SHOWS IN WHICH ROUTE USER CURRENTLY IS.  
 */

const PageHero = ({ title, product }) => {
    return (
        <section className="w-full min-h page-hero flex items-center bg-red-50 text-red-950">
            <div className="container">
                <h4 className="text-lg">
                    <Link href="/" className="text-red-800 p-2 transition-linear hover:text-red-950">Home</Link>
                    {product && <Link href="/products" className="text-red-800 p-2 transition-linear hover:text-red-950">/ Products</Link>}/ {title}
                </h4>
            </div>
        </section>
    );
}

export default PageHero;