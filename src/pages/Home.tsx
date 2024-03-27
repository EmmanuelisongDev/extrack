import styled from "styled-components"
import { IoAdd } from "react-icons/io5";
import { ExpenseForm } from "../components";
import { useState } from "react";
export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
    <ExpenseForm  isOpened={isOpened}
     
        onClose={() => setIsOpened(false)}/>
    <Main>
      <div >
      <IoAddIcon onClick={() => setIsOpened(true)} />
      </div>
    </Main>
    </>
  )
}

const Main = styled.main`
padding: 3px;
svg{
  
}
`
const IoAddIcon = styled(IoAdd)`
  color: #eee;
  border: 2px solid #eee ;
  border-radius: 100%;
  font-size:4rem;
  cursor: pointer;
  &:hover{
    transform: scale(1.1); 
    transition: all 0.3s ease;
  }
`;