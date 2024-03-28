import styled from "styled-components"

export default function BudgetCard() {
  return (
    <Card>
      
      <CardContainer>
        <h2>Amount</h2>
        <h1>#5000</h1>
      </CardContainer>
      <CardContainer>
        <h2>Amount</h2>
        <h1>#5000</h1>
      </CardContainer>

    

    </Card>
  )
}

const Card =  styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    width: 100%;
    
    gap:0.5em
`

const CardContainer = styled.div`
border: 1px ;
border-radius: 4px;
width: 50%;
padding: 0.5em;
background-color: #56da36;
    h2{

    }

    h1{

    }
`