import React from 'react'
import styled from 'styled-components'

export default function Button({ name, onClick }) {
  return <ButtonStyled onClick={onClick}>{name}</ButtonStyled>
}

const ButtonStyled = styled.button`
  height: 25px;
  width: 60px;
  color: var(--freshgreen);
  border-radius: 5px;
  border: 1px solid var(--freshgreen);
  cursor: pointer;

  &:active {
    background: var(--freshgreen);
    color: white;
  }
`
