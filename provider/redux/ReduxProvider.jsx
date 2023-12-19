"use client";

import { Provider } from "react-redux";
import { store } from "./store";

/**
 * PROVIDES STATE VALUES TO ALL THE 'children' ELEMENTS.
 */

const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default ReduxProvider;