import styled from "styled-components";
import AdminLogin from "./pages/AdminLogin";
import AdminMain from "./pages/AdminMain";
import { useState } from "react";

const Admin = ()=>{

    const [isLogin, setIsLogin] = useState(true);
    return(
        <> 
           {isLogin?<AdminMain></AdminMain>:<AdminLogin></AdminLogin>}
            
            

        </>
    )
}

export default Admin;