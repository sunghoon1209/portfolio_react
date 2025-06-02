import styled from "styled-components";


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
    return(
        <StyledAdminHeader>
           <ul>
                <li>Main</li>
                <li>Design</li>
                <li>Works</li>                
           </ul>
        </StyledAdminHeader>
    )
}

export default AdminHeader;