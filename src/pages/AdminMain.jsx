import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminAside from "../components/AdminAside";
import styled from "styled-components";
import AdminDesign from "./AdminDesign";
import AdminWorks from "./AdminWorks";
import AdminworksAdd from "./AdminWorksAdd";

const StyledAdmin = styled.div`
    display:flex;
`
const StyledMain = styled.div`
    background-color: #101010;
    flex-grow: 1;
    height: 100vh;    
    display: flex;
    padding:20px;
    
    

    section{
        width: 100%;
        background-color: #fff;
        border-radius: 30px;
        min-height: 860px;
        padding:80px 100px;
        position: relative;
    }
`




const AdminMain = () =>{
    return(
        <StyledAdmin>
            <AdminAside></AdminAside>
            <StyledMain>
               
                <Routes>
                    <Route path="design" element={<AdminDesign/>}></Route>      
                    <Route path="works" element={<AdminWorks/>}></Route>      
                    <Route path="works/add" element={<AdminworksAdd/>}></Route>      
                </Routes>
            </StyledMain>
        </StyledAdmin>
    )
}

export default AdminMain;