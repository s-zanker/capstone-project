import React from 'react'
import styled from 'styled-components'

export default function Header({ title }) {
  const logoPath = '/icons/digitalnatur-logo.svg'
  return (
    <HeaderStyled>
      <img src={process.env.PUBLIC_URL + logoPath} alt="" />
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
