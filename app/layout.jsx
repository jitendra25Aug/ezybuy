import Footer from "@/components/Footer";
import ReduxProvider from "@/provider/redux/ReduxProvider";
import Header from "../components/Header";
import { orbitron } from "./fonts";
import "./globals.css";

/**
 * CONTAINS THE ROOT LAYOUT OF A SITE
 */

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={`${orbitron.variable}`}>
            <body className="min-w-full min-h-screen text-sm">
                <ReduxProvider>
                    <header className="sticky top-0 w-full h-28 lg:h-20 border bg-white z-50 flex items-center justify-center">
                        <Header />
                    </header>
                    <main>
                        {children}
                    </main>
                    <Footer />
                </ReduxProvider>
            </body>
        </html>
    );
}

export const metadata = {
    title: 'EZYBUY',
    description: 'Dummy website for displaying and buying toys',
}

export default RootLayout;