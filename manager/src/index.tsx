import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import ReactLoading from "react-loading";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <Suspense
                    fallback={
                        <div className="d-flex justify-content-center align-items-center w-100" style={{height: '100vh'}}>
                            <ReactLoading
                                type='spin'
                                color='#000'
                                height={"20%"}
                                width={"20%"}
                            />
                        </div>
                    }>
                    <Router>
                        <App />
                    </Router>
                </Suspense>
            </AuthProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
