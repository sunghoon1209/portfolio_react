import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Works from "../pages/Works";

const AppRouter = ()=>{
    return(

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/works" element={<Works />}></Route>
            </Routes>

    )
};

export default AppRouter;