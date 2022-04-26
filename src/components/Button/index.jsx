import styled from "styled-components"

export const Botao = styled.button`
  align-self: center;
  background-color: #5080fb2d;
  border-radius: 10px;
  box-shadow: 2px 4px 4px #0000009F;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 16px;
  width: 150px;
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: #5081FB3D;
    cursor: pointer;
  }

  &:active{
    background-color: #3f75fd8a
  }


@media screen and (min-width: 1280px) {
    grid-column-start: span 2;
    justify-self: center;
    width: 200px;
    font-size: 2.25rem;
}
`