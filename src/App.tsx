import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { routes } from "./routes";

const history = createBrowserHistory();

function App() {
    return (
        <>
            <Router history={history}>{routes}</Router>
        </>
    );
}

export default App;
