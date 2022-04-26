import styled from "styled-components";

export const FormularioWrapper = styled.form`
    display:flex;
    flex-direction: column;
    grid-area: nova-tarefa;
    background-color: #051D3B;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;

    .inputContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;

    label {
    margin-bottom: 8px;
    font-size: 1.25rem;
    }

    input {
    width: 100%;
    padding: 8px 12px 4px;
    box-sizing: border-box;
    border: unset;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 2px 4px #2D2B2B9F inset;
    transition: background 0.3s ease-in-out; 
    
    &::placeholder {
        color: #BFBFBF;
    }

    &:hover{
        background: #41536A;
    }

    &:focus{
        background: #41536A;
    }
    }
}

@media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 2.25rem;
    padding: 24px;
    box-sizing: border-box;

    .inputContainer {
    width: calc(60% - 12px);

    &:last-of-type {
        width: 40%;
    }

    label {
        font-size: 2rem;
    }

    input {
        height: 100%;
        font-size: 1.75rem;
    }
    }
}
  
`