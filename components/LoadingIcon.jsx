/**
 * @returns REACT ELEMENT WHICH DISPLAYS LOADING INDICATOR
 */

const LoadingIcon = () => {
    return (
        <section>
            <div className="page-100 flex justify-center items-center">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </section>
    );
}

export default LoadingIcon;