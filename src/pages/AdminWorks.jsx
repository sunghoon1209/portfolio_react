import styled from "styled-components";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
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
  
    return (
      <div>
        <h2>작업물 목록</h2>
        <ul>
          {works.map(work => (
            <li key={work.id}>
              <h3>{work.name}</h3>
              <p>{work.desc}</p>
              <img src={work.imgSrc} alt={work.name} width={200} />
              <a href={work.github} target="_blank" rel="noreferrer">GitHub</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

const AdminWokrs = ()=>{
    return(
        <>
            <WorkList></WorkList>
            {/* <AdminworksAdd></AdminworksAdd> */}
        </>
    )
}

export default AdminWokrs;