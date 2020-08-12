import React from 'react'
import styled from 'styled-components'

export default function Header({ logo }) {
  return (
    <HeaderStyled>
      <img src={logo} alt="header logo" />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  background-color: var(--freshgreen);
  border-bottom: 1px solid var(--freshgreen);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
