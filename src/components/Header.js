import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <StyledHeader>
      <div>digitalnatur</div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 56px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
