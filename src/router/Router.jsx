import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Works from "../pages/Works";
import Details from "../pages/details";

import Header from "../components/common/Header";
import StyledInner from "../components/common/Inner";

import Admin from "../Admin";
const UserRouter = ()=>{
    return(
        <>
              <Header></Header>
                <main>      
                    <StyledInner>
                        <Routes>
                            <Route path="home" element={<Home />}></Route>
                            <Route path="works" element={<Works />}></Route>
                            <Route path="details" element={<Details />}></Route>
                        </Routes>
                    </StyledInner>  
                </main>
        </>
    )
}

const AdminRouter = ()=>{
    return(
        <Routes>
            <Route path="main" element={<Admin />}></Route>
        </Routes>
    )
}

const AppRouter = ()=>{
    return(

            <Routes>
                <Route path="/*" element={<UserRouter />}></Route>
                <Route path="/admin/*" element={<AdminRouter/>}></Route>

            </Routes>

    )
};



export default AppRouter;