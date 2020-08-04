import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon/Icon'

export default function Button({ name, onClick, icon }) {
  return (
    <>
      <ButtonStyled onClick={onClick}>
        {name}
        <Icon icon={icon} />
      </ButtonStyled>
    </>
  )
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 25px;
  width: 100%;
  min-width: 335px;
  color: var(--freshgreen);
  border-radius: 5px;
  border: 1px solid var(--freshgreen);
  cursor: pointer;
`
