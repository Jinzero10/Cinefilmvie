import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./features/app/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./Context/handleSearch";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <SearchProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </SearchProvider>
        </Provider>
    </React.StrictMode>
);
