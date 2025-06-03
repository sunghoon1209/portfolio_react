import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledAdminHeader = styled.header`
    width: 240px;
    background: #fff;
    height:100%;
    min-height: 100vh;
    padding:24px 0;

    ul{
        display: flex;
        flex-direction: column;
        align-items:center;
        li{
            width: 50%;
            font-size:24px;
            cursor: pointer;
        }
    }
`

const AdminHeader = () => {
    const navigate = useNavigate();
    return(
        <StyledAdminHeader>
           <ul>
                <li onClick={()=>{navigate('/admin/')}}>Main</li>
                <li onClick={()=>{navigate('/admin/design')}}>Design</li>
                <li onClick={()=>{navigate('/admin/works')}}>Works</li>                
           </ul>
        </StyledAdminHeader>
    )
}

export default AdminHeader;