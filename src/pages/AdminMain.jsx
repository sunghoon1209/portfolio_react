import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import styled from "styled-components";
import AdminDesign from "./AdminDesign";
import AdminWokrs from "./AdminWorks";
const StyledAdmin = styled.div`
    display:flex;
`
const StyledMain = styled.main`
    background-color: #f5f6fa;
    flex-grow: 1;
    padding: 20px;
    height: 100vh;
`


const AdminMain = () =>{
    return(
        <StyledAdmin>
            <AdminHeader></AdminHeader>
            <StyledMain>
                <Routes>
                    <Route path="design" element={<AdminDesign/>}></Route>      
                    <Route path="works" element={<AdminWokrs/>}></Route>      
                </Routes>
            </StyledMain>
        </StyledAdmin>
    )
}

export default AdminMain;