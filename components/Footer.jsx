/**
 * DISPLAYS THE FOOTER SECTION OF A PAGE
 */

const Footer = () => {
    return (
        <footer className="h-20 bg-black text-center flex flex-col justify-center items-center md:flex-row">
            <h5 className="text-white font-normal m-1 leading-tight">&copy; {new Date().getFullYear()} <span className="text-red-800">EZYBUY</span> </h5>
            <h5 className="text-white font-normal m-1 leading-tight">All rights reserved</h5>
        </footer>
    );
}

export default Footer;