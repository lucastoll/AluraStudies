import styled from "styled-components";

export const CronometroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: cronometro;

  .relogioWrapper {
    align-items: center;
    background-color: #051D3B;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    gap: 20px;
    justify-content: center;
    margin-bottom: 24px;
    padding: 8px 12px;
    width: 100%;
  }

  .titulo {
    font-size: 1.25rem;
  }


  @media screen and (min-width:1280px) {
    
    .relogioWrapper{
      font-size: 10rem;
    }

    p {
      font-size: 2rem;
    }

    button {
      grid-column-start: span 2;
      justify-self: center;
      width: 200px;
      font-size: 2.25rem;
    }
  }
`