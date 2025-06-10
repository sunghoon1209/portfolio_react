import styled from "styled-components";
import img from "../assets/images/simtos.png";
import { useEffect,useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const StyledWorksSection = styled.section`
    padding:36px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap:  18px;
`
const StyledTitle = styled.p`
    position: absolute;
    bottom: -20px;
    color:#fff;
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(128, 128, 128, 0.3);
    padding: 10px 0;
    height: 0;
    transition: bottom 0.7s;
`
const StyledCard = styled.div`
    width: calc((100% - 36px)/3);
    aspect-ratio: 16/9;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    position: relative;
    cursor: pointer;

    &:hover ${StyledTitle} {
        bottom: 0;
        height: 40px; /* 예시로 높이 변경 */
        background-color: rgba(0, 0, 0, 0.5); /* 배경색 진하게 */
    }    

`


const StyledCardImg = styled.img`
    width: 100%;    

`

const Card = ({ image, name }) => {
    return (
      <StyledCard>
        <StyledCardImg src={image || "기본이미지.png"} alt={name} />
        <StyledTitle>{name}</StyledTitle>
      </StyledCard>
    );
  };

const Works = ()=>{
    const [works, setWorks] = useState([]);

    useEffect(() => {
      const fetchWorks = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "works"));
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setWorks(data);
        } catch (error) {
          console.error("Error fetching works:", error);
        }
      };
  
      fetchWorks();
    }, []);
    return(
        <>
            <StyledWorksSection>
            {works.map(work => (
                <Card key={work.id} image={work.image} name={work.name} />
            ))}
            </StyledWorksSection>
        </>
    )
}

export default Works;