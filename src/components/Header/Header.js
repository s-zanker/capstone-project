import React from 'react'
import styled from 'styled-components'

export default function Header({ title }) {
  return (
    <StyledHeader>
      <h1>{title}</h1>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: var(--freshgreen);
  border-bottom: 1px solid var(--freshgreen);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
