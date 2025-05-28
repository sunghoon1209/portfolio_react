import styled from "styled-components"

const StyledWorksSection = styled.section`
    padding:20px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap:  2%;
`
const StyledCard = styled.div`
    width: 32%;
    aspect-ratio: 16/9;
    background: #fff;
`


const Works = ()=>{
    return(
        <>
            <StyledWorksSection>
                <StyledCard>1</StyledCard>
                <StyledCard>1</StyledCard>
                <StyledCard>1</StyledCard>
                <StyledCard>1</StyledCard>
            </StyledWorksSection>
        </>
    )
}

export default Works;