import styled from "styled-components";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StyledAdd = styled.section`
    background:#fff;
    padding: 20px;
    display: flex;
    gap:0 2%;
    flex-wrap: wrap;
    position: relative;
`
const StyledWrap = styled.form`
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


const StyledTextArea = styled.textarea`
    outline:none;
    height: 120px;
    width: 80%;
    text-align: right;
    resize: none;
    padding:10px;
`



const AdminworksAdd = () =>{
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

    const [formData, setFormData] = useState({
        title: "",
        skills: "",
        desc: "",
        image: "",
        link:"",
        github: "",
        year: "" 
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 추가 버튼 클릭시 데이터 저장 함수
    const handleAdd = async () =>{
        try{
            const docRef = await addDoc(collection(db, "works"), {
                ...formData
            });
            alert("저장되었습니다!");
            goBack();
        } catch(e){
            console.error("Error adding document: ", e);
            alert("저장 중 오류가 발생했습니다.");
        }
    }

    return(
        <StyledAdd>
            <StyledWrap>

                <StyledLabel>
                    <StyledSpan>제목</StyledSpan>
                    <StyledInput type="text" name="name" onChange={handleChange} />
                </StyledLabel>
                <StyledLabel>
                    <StyledSpan>사용기술</StyledSpan>
                    <StyledInput type="text" name="skills" onChange={handleChange} />
                </StyledLabel>
                <StyledLabel>
                    <StyledSpan>설명</StyledSpan>
                    <StyledTextArea type="text" name="desc" onChange={handleChange} />
                </StyledLabel>
                <StyledLabel>
                    <StyledSpan>이미지</StyledSpan>
                    <StyledInput type="text" name="image" onChange={handleChange} />
                </StyledLabel>
                <StyledLabel>
                    <StyledSpan>링크</StyledSpan>
                    <StyledInput type="text" name="link" onChange={handleChange} />
                </StyledLabel>
                <StyledLabel>
                    <StyledSpan>제작연도</StyledSpan>
                    <StyledInput type="number" name="year" onChange={handleChange} />
                </StyledLabel>
               
            </StyledWrap>
            <StyledAddButton type="button" onClick={handleAdd}>추가</StyledAddButton>        
        </StyledAdd>
    )

}

export default AdminworksAdd;