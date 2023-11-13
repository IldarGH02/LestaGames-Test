import { HOME, SHIPS } from '../constants/index'
import {lazy} from "react";

const HomePage = lazy(() => import('../../pages/Home'))
const ShipsPage = lazy(() => import('../../pages/Ships'))

export const routing = [
    {
        path: HOME,
        element: <HomePage/>
    },
    {
        path: SHIPS,
        element: <ShipsPage/>
    }
]