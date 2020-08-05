import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function Tag({ title, onClick, clickable }) {
  const [isSelected, setIsSelected] = useState(
    JSON.parse(localStorage.getItem(title) || false)
  )

  useEffect(() => {
    localStorage.setItem(title, isSelected)
    //console.log('Tag - useEffect: ' + title + ' isSelected: ' + isSelected)
  }, [isSelected, title])

  return clickable ? (
    <TagStyled clicked={isSelected} onClick={handleClick}>
      {title}
    </TagStyled>
  ) : (
    <TagDetailStyled>{title}</TagDetailStyled>
  )

  function handleClick() {
    onClick(title, isSelected)
    setIsSelected(!isSelected)
  }
}

const TagStyled = styled.span`
  color: ${(props) => (props.clicked ? 'white' : 'var(--freshgreen)')};
  background: ${(props) =>
    props.clicked ? 'var(--freshgreen)' : 'transparent'};
  border-radius: 6px;
  border: 1px solid var(--freshgreen);
  padding: 4px 8px;
  margin: 6px 6px 0px 0px;
  cursor: pointer;
  &:hover {
    background: var(--freshgreen);
    color: white;
  }
`
const TagDetailStyled = styled.span`
  color: var(--darkgreen);
  border-radius: 5px;
  border: 1px solid var(--darkgreen);
  padding: 2px 6px;
  margin: 6px 6px 0px 0px;
  background: 'transparent';
`
