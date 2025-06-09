import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";

const StyledAdd = styled.section`
    background:#fff;
    padding: 20px;
    display: flex;
    gap:0 2%;
    flex-wrap: wrap;
    position: relative;
`
const StyledWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 10px;

`

const StyledAddButton = styled.button`
    position: absolute;
    bottom: 40px;
    right: 40px;
    border: 1px solid #111;
    padding:10px 20px;
    border-radius: 10px;
    font-size:18px;
    transition: background-color 0.7s;

    &:hover{
        background-color: #000;
        color:#fff;
    }
    

`
const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    width:100%;    
`

const StyledSpan = styled.span`
    width: 20%;
`

const StyledInput = styled.input`
    outline:none;
    height: 28px;
    width: 80%;
    text-align: right;
`

const StyledIdxInput =styled.input`    
    outline: none;
    height: 28px;
    width: 80%;    
    text-align: right;
    border: none;
    padding-right: 0;

`



const AdminworksAdd = () =>{

    const [nextIdx, setNextIdx] = useState(0);
    useEffect(() => {
        const fetchNextIdx = async () => {
            try {
                // 'works' 컬렉션의 모든 문서를 가져옵니다.
                const worksCollectionRef = collection(db, "works");
                const data = await getDocs(worksCollectionRef);
                
                // 문서의 총개수 + 1을 다음 순번으로 설정합니다.
                setNextIdx(data.size + 1);
            } catch (error) {
                console.error("Error fetching document count: ", error);
            }
        };

        fetchNextIdx();
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 설정




    return(
        <StyledAdd>
            <StyledWrap>
                <StyledLabel>
                    <StyledSpan>순번</StyledSpan>
                    <StyledIdxInput type="number" readOnly value={nextIdx || ""} />
                </StyledLabel>
                <StyledLabel>
                    <StyledSpan>제목</StyledSpan>
                    <StyledInput type="text" />
                </StyledLabel>
                <StyledLabel>
                    <StyledSpan>사용기술</StyledSpan>
                    <StyledInput type="text" />
                </StyledLabel>
                <StyledLabel>
                    <StyledSpan>설명</StyledSpan>
                    <StyledInput type="text" />
                </StyledLabel>
                <StyledLabel>
                    <StyledSpan>이미지</StyledSpan>
                    <StyledInput type="text" />
                </StyledLabel>
                <StyledLabel>
                    <StyledSpan>깃허브링크</StyledSpan>
                    <StyledInput type="text" />
                </StyledLabel>
                <StyledLabel>
                    <StyledSpan>제작연도</StyledSpan>
                    <StyledInput type="text" />
                </StyledLabel>
               
            </StyledWrap>
            <StyledAddButton>추가</StyledAddButton>            
        </StyledAdd>
    )

}

export default AdminworksAdd;