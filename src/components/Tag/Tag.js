import React from 'react'
import styled from 'styled-components'

export default function Tag({ title, clickable, onClick }) {
  return (
    <TagStyled clickable={clickable} onClick={onClick}>
      {title}
    </TagStyled>
  )
}

const TagStyled = styled.span`
  color: var(--darkgreen);
  border-radius: 6px;
  border: 1px solid var(--darkgreen);
  padding: 4px 8px;
  margin: 6px 6px 0px 0px;
  cursor: ${(props) => props.clickable || 'default'};

  &:active {
    background: ${(props) =>
      props.clickable ? 'var(--darkgreen)' : 'transparent'};
    color: ${(props) => (props.clickable ? 'white' : 'var(--darkgreen)')};
  }
`
