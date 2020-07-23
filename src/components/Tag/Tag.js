import React from 'react'
import styled from 'styled-components'

export default function Tag({ title }) {
  return <TagStyled>{title}</TagStyled>
}

const TagStyled = styled.span`
  color: var(--freshgreen);
  border-radius: 5px;
  border: 1px solid var(--freshgreen);
  padding: 3px 6px;
  cursor: pointer;

  &:active {
    background: var(--freshgreen);
    color: white;
  }
`
