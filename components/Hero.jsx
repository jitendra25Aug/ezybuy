import Link from "next/link";

/**
 * DISPLAYS THE UI FOR HOME PAGE
 */

const Hero = () => {
    return (
        <div className="container">
            <div className="grid place-items-center lg:grid-cols-2 lg:gap-32 hero">
                <article id="content">
                    <h1 className="mb-3 leading-tight -tracking-tight capitalize font-bold text-4xl lg:text-5xl lg:mb-8 lg:leading-none">design your child's<br /> comfort zone</h1>
                    <p className="leading-8 max-w-2xl mb-8 text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis soluta eligendi temporibus quidem vitae quaerat, id fugiat
                        dignissimos numquam earum.</p>
                    <Link href="/products" className="btn hero-btn">shop now</Link>
                </article>
                <article className="hidden lg:block">
                    <img src="/assets/images/toy_car.svg" alt="kid playing with toy" className="w-full main-img" />
                </article>
            </div>
        </div>
    );
}

export default Hero;