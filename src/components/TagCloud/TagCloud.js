import React from 'react'
import styled from 'styled-components'

export default function TagCloud({ tagList }) {
  return <TagCloudContainerStyled>{tagList}</TagCloudContainerStyled>
}

const TagCloudContainerStyled = styled.div`
  background: white;
  border: 1px solid var(--freshgreen);
  border-radius: 5px;
  height: 250px;
  width: 100%;
  padding: 20px;
`
