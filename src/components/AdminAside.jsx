import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledAdminAside = styled.aside`
    width: 380px;
    color:#fff;
    background-color: #101010;    
    height:100%;
    min-height: 100vh;
    padding:70px 80px;

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

const AdminAside = () => {
    const navigate = useNavigate();
    return(
        <StyledAdminAside>
           <ul>
                <li onClick={()=>{navigate('/admin/')}}>Main</li>
                <li onClick={()=>{navigate('/admin/design')}}>Design</li>
                <li onClick={()=>{navigate('/admin/works')}}>Works</li>                
           </ul>
        </StyledAdminAside>
    )
}

export default AdminAside;