import styled from "styled-components";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";    

import AdminworksAdd from "./AdminWorksAdd";

// 작업물 목록
const WorkList = () => {
    const [works, setWorks] = useState([]);
  
    useEffect(() => {
      const fetchWorks = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "works"));
          const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setWorks(data);
        } catch (error) {
          console.error("작업물 가져오기 실패:", error);
        }
      };
  
      fetchWorks();
    }, []);
  

    const StyleSearchArea = styled.div`
      width: 100%;
      display: flex;
      justify-content: end;
      height: 32px;
      gap:20px;
    `

    const StyledSearchInput = styled.input`
      padding: 6px 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      width: 200px;
      outline: none;
    `


    const StyleCardContainer = styled.ul`
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    `




const StyledCard = styled.li`
    width: 300px;
    height:170px;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    position: relative;

    &:hover{
      transform: translateY(-4px);
    }
`

    const StyledButtonContainer = styled.div`
      position: absolute;
      display: flex;
      gap:10px;
      top: 50px;
      right:50px; 
    `

const StyledButtonAdd = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: black;
    color: white;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
const StyledWorksBtnCont =styled.div`
  display: flex;
  position: absolute;
  gap:10px;
  top:5px;
  right:5px;
`

const StyleDeleteButton = styled.button`
  padding:8px 16px;
  background: red;
  color:#fff;
  border-radius: 5px;
`
const StyleModifyButton = styled.button`
  padding:8px 16px;
  background: green;
  color:#fff; 
  border-radius: 5px;

`

const handleDelete = async (docId) => {
  const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
  if (!confirmDelete) return;

  try {
    await deleteDoc(doc(db, "works", docId));
    console.log("삭제 성공");

    // 삭제된 문서 제외한 새 리스트로 갱신
    setWorks(prev => prev.filter(work => work.id !== docId));
  } catch (error) {
    console.error("삭제 실패:", error);
    alert("삭제에 실패했습니다.");
  }
};
const navigate = useNavigate();
    return (
      <section>
        <h2>작업물 목록</h2>
        <StyleSearchArea>
          <StyledSearchInput placeholder="검색어를 입력해주세요."></StyledSearchInput>          
        </StyleSearchArea>
        <StyledButtonContainer>
          <StyledButtonAdd onClick={()=>{navigate('/admin/works/add')}}>추가</StyledButtonAdd>          

        </StyledButtonContainer>
        <StyleCardContainer>

            {works.map(work => (
              <StyledCard key={work.id}>
                <StyledWorksBtnCont>
                  <StyleModifyButton>수정</StyleModifyButton>
                  <StyleDeleteButton onClick={() => handleDelete(work.id)}>삭제</StyleDeleteButton>
                  
                </StyledWorksBtnCont>
                <h3>{work.name}</h3>
                <p>{work.desc}</p>
                <img src={work.imgSrc} alt={work.name} />
                <a href={work.github} target="_blank" rel="noreferrer">GitHub</a>
              </StyledCard>
            ))}
        </StyleCardContainer>

      </section>
    );
  };

const AdminWorks = ()=>{
    return(
        <>
            <WorkList></WorkList>
        </>
    )
}

export default AdminWorks;