import { useState } from "react";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../firebase";
import useAuthStore from "../store/useAuthStore";

const StyledAdminSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;    
`


const StyledLoginBox = styled.div`
    width: 400px;
    padding: 72px 36px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 40px auto;

    p{
        text-align: center;
        font-size:28px;
    }
`

const StyledPasswordInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-size:16px;
    border-bottom: 1px solid #ccc;
    transition: 1s;
    
    padding:10px;

    &:hover{
        border-bottom: 1px solid #000;
    }
    &::placeholder{
        font-size:16px;
    }
`


const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ bgColor }) => bgColor || "red"};
  color: ${({ textColor }) => textColor || "white"};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const AdminLogin = ()=>{
    const [email, setEmail] = useState("sunghoon.developer@gmail.com"); // 고정값
    const [pwInputValue, setPwInputValue] = useState('');
    const handleChange = (e)=>{
        setPwInputValue(e.target.value);
    }

    const handleLogin = async () =>{
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, pwInputValue);
            const user = userCredential.user;
            useAuthStore.getState().setUser(user);

            alert("로그인 성공");
            // 예: 페이지 이동하거나 상태 저장
          } catch (e) {
            alert("관리자가 아니면 둘러보기 버튼을 눌러주세요.");
          }
    }

    return(
        <StyledAdminSection>
            <StyledLoginBox>
                <p>관리자페이지</p>
                <StyledPasswordInput type="password" placeholder="비밀번호" value={pwInputValue} onChange={handleChange}/>
                <StyledButton bgColor="#333" textColor="white" onClick={handleLogin}>로그인</StyledButton>
                <StyledButton bgColor="#f5a623" textColor="#000">둘러보기</StyledButton>
            </StyledLoginBox>
        </StyledAdminSection>
    )
}

export default AdminLogin;