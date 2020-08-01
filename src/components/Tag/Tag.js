import React, { useState } from 'react'
import styled from 'styled-components'

export default function Tag({ title, onClick, clickable }) {
  const [isSelected, setIsSelected] = useState(false)

  return clickable ? (
    <TagStyled clicked={isSelected} onClick={handleClick}>
      {title}
    </TagStyled>
  ) : (
    <TagDetailStyled>{title}</TagDetailStyled>
  )

  function handleClick() {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    console.log('Tag - handleClick()')
    onClick(title, isSelected)
    setIsSelected(!isSelected)
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  }
}

const TagStyled = styled.span`
  color: ${(props) => (props.clicked ? 'white' : 'var(--freshgreen)')};
  border-radius: 6px;
  border: 1px solid var(--freshgreen);
  padding: 4px 8px;
  margin: 6px 6px 0px 0px;
  cursor: ${(props) => props.clicked || 'default'};
  background: ${(props) =>
    props.clicked ? 'var(--freshgreen)' : 'transparent'};
`
const TagDetailStyled = styled.span`
  color: var(--darkgreen);
  border-radius: 5px;
  border: 1px solid var(--darkgreen);
  padding: 2px 6px;
  margin: 6px 6px 0px 0px;
  background: 'transparent';
`
