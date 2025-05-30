import styled from "styled-components"
import { useNavigate } from "react-router-dom"


const StyledHeader = styled.header`
    width: 100%;
    height: 100px;    
    background-color: #7d9fc8   ;
`
const StyledHeaderInner = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
`


const StyledLogo = styled.h1`
    color:#fff;
    font-size: 24px;
    font-weight: 600;
`

const StyledHeaderNav = styled.nav`
   ul{
    display: flex;
    gap: 20px;
    font-size: 20px;
    color:#fff;
    font-weight: 600;
   }

   li{
    cursor: pointer;
   }
`

const Header = ()=>{
    const navigate = useNavigate();
    return(
        <StyledHeader>
            <StyledHeaderInner>
                <StyledLogo>Sunghoon's Portfolio</StyledLogo>
                <StyledHeaderNav>
                    <ul>
                        <li onClick={()=>{navigate('/')}}>Home</li>
                        <li onClick={()=>{navigate('/works')}}>Works</li>                    
                        <li onClick={()=>{navigate('/admin/main')}}>Admin</li>                    
                    </ul>
                    
                </StyledHeaderNav>
            </StyledHeaderInner>               
        </StyledHeader>
    )
}

export default Header;