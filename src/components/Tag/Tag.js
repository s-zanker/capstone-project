import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from '@storybook/addons'

export default function Tag({ title, clickable, onClick }) {
  const [isClicked, setIsClicked] = useState(false)
  console.log(isClicked)

  if (clickable) {
    return (
      <TagStyled clicked={isClicked} onClick={clickFunction}>
        {title}
      </TagStyled>
    )
  } else {
    return <TagStyled clicked={isClicked}>{title}</TagStyled>
  }

  function clickFunction() {
    isClicked || onClick(title)
    setIsClicked(!isClicked)
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
