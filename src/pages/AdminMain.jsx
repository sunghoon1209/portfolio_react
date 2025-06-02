import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import styled from "styled-components";
import AdminDesign from "./AdminDesign";
const StyledAdmin = styled.div`
    display:flex;
`
const StyledMain = styled.main`
    background-color: #f5f6fa;
`

const AdminMain = () =>{
    return(
        <StyledAdmin>
            <AdminHeader></AdminHeader>
            <main>
                <Routes>
                    <Route path="design" element={<AdminDesign/>}></Route>      
                </Routes>
            </main>
        </StyledAdmin>
    )
}

export default AdminMain;