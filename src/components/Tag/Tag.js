import React from 'react'
import styled from 'styled-components'

export default function Tag({ title }) {
  return <TagStyled>{title}</TagStyled>
}

const TagStyled = styled.span`
  color: #9bb449;
  border-radius: 5px;
  border: 1px solid #9bb449;
  padding: 5px 10px;
  cursor: pointer;

  &:hover,
  &.active {
    background: #9bb449;
    color: white;
  }
`
