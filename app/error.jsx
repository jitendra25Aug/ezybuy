"use client";

/**
 * DISPLAYS ERROR UI
 */

const ErrorBoundary = ({ error, reset }) => {
    return (
        <section className="page-100 container flex flex-col justify-center items-center text-center">
            <h1 className="text-red-800 text-3xl">Error:</h1>
            <h2 className="text-red-800 text-xl">{error.message}</h2>
            <button type="button" className="btn mt-16" onClick={reset}>Try Again</button>
        </section>
    );
}

export default ErrorBoundary;