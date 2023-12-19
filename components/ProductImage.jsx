/**
 * DISPLAYS THE IMAGE OF A SINGLE PRODUCT
 */

const ProductImage = ({ imgUrl }) => {
    return (
        <section>
            <img src={imgUrl} alt="main" className="block w-full h-96 object-contain rounded-md sm:h-[500px]" />
        </section>
    );
}

export default ProductImage;