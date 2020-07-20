import React from 'react'
import styled from 'styled-components'

export default function Button({ name, onClick }) {
  return <ButtonStyled onClick={onClick}>{name}</ButtonStyled>
}

const ButtonStyled = styled.button`
  background: var(--freshgreen);
  border-radius: 5px;
  height: 25px;
  width: 80px;
  color: white;
`
