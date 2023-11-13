import React, {Suspense} from 'react'
import {BrowserRouter} from "react-router-dom";
import RoutesPage from "../pages";
import Header from "../widgets/Header";

import {Spinner} from "react-bootstrap";
import './styles/index.scss'

const App = () => {
    return (
        <Suspense fallback={<Spinner/>}>
            <BrowserRouter>
                <Header/>
                <RoutesPage/>
            </BrowserRouter>
        </Suspense>
    )
}

export default App