import React, { useState } from 'react'
import styled from 'styled-components'

export default function Tag({ title, onClick, clickable }) {
  const [isClicked, setIsClicked] = useState(false)

  return clickable ? (
    <TagStyled clicked={isClicked} onClick={handleClick}>
      {title}
    </TagStyled>
  ) : (
    <TagStyled>{title}</TagStyled>
  )

  function handleClick() {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    console.log('Tag - handleClick()')
    onClick(title, isClicked)
    setIsClicked(!isClicked)
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  }
}

const TagStyled = styled.span`
  color: ${(props) => (props.clicked ? 'white' : 'var(--darkgreen)')};
  border-radius: 6px;
  border: 1px solid var(--darkgreen);
  padding: 4px 8px;
  margin: 6px 6px 0px 0px;
  cursor: ${(props) => props.clicked || 'default'};

  background: ${(props) =>
    props.clicked ? 'var(--darkgreen)' : 'transparent'};
`
