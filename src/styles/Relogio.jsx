import styled from "styled-components";

export const RelogioComponente = styled.div`
  display: flex;

  .spanRelogio{
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 30%) inset;
  height: auto;
  width: 30px;
  padding: 20px 4px 8px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out; 


  &:hover{
        background-color: #41536A;
  }

  @media screen and (min-width:1280px) {
    width: 9rem;
    padding: 60px 4px 8px 4px;
    height: 100px;
  }

  }

  .relogioDivisao {
  display: flex;
  align-items: center;
  justify-content: center;
}
`

export const SpanRelogio = styled.div`
  background-color: #5D677C;
  box-shadow: 2px 2px 4px #2B2B2B inset;
  height: auto;
  width: 30px;
  padding: 20px 4px 8px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out; 

  @media screen and (min-width:1280px) {
    width: 9rem;
  }

`