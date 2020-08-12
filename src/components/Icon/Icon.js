import React from 'react'
import styled from 'styled-components'

export default function Icon({ icon, name, onIconClick, clickable }) {
  return (
    <>
      <IconStyled
        src={icon}
        alt=""
        onClick={clickable ? handleIconClick : null}
      />
    </>
  )

  function handleIconClick() {
    onIconClick(name)
  }
}

const IconStyled = styled.img`
  cursor: pointer;
`
