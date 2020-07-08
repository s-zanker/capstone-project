import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <StyledHeader>
      <h1>digitalnatur</h1>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 56px;
  min-width: 100vw;
  background-color: whitesmoke;
  border-bottom: 1px solid var(--freshgreen);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
`
