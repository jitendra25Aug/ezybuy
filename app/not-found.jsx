/**
 * WILL BE DISPLAYED IF USER ENTERS UNKNOWN ROUTE PATH
 */

const NotFound = ()=>{
    return (
        <section className="page-100 grid place-items-center text-center">
            <div>
                <h1 className="text-9xl">404</h1>
                <h3 className="text-gray-500 mb-6">sorry, could not find requested resource</h3>
            </div>
        </section>
    );
}

export default NotFound;