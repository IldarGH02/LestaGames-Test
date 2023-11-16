import { Route, Routes } from "react-router-dom";
import { routing } from "../features/routing";
import Layout from "./Layout";

const RoutesPage = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                {routing.map(({path, element}) =>
                    <Route path={path} element={element} key={path}/>
                )}
            </Route>
        </Routes>
    )
}

export default RoutesPage