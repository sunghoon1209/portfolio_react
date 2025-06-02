import styled from "styled-components";

const StyledAdd = styled.section`
    background:#fff;
    padding: 20px;
    display: flex;
    gap:2%;
    
`
const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    width:49%;
    
`

const StyledSpan = styled.span`
    width: 20%;
`

const StyledInput = styled.input`
    outline:none;
    height: 28px;
    width: 80%;
`

const StyledAddButton = styled.button`
    
`

const AdminworksAdd = () =>{
    return(
        <StyledAdd>
            <StyledLabel>
                <StyledSpan>제목:</StyledSpan>
                <StyledInput type="text" />
            </StyledLabel>
            <StyledAddButton type="button">추가</StyledAddButton>
        </StyledAdd>
    )

}

export default AdminworksAdd;