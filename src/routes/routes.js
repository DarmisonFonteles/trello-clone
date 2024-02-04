import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
        </BrowserRouter>
    )
}