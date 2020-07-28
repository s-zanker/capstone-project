import React from 'react'
import styled from 'styled-components'
import TagList from '../TagList/TagList'

export default function TagCloud({ tagList, onClick }) {
  return (
    <>
      <TagCloudContainerStyled>
        <TagList tagList={tagList} onClick={onClick} clickable={true} />
      </TagCloudContainerStyled>
    </>
  )
}

const TagCloudContainerStyled = styled.div`
  background: white;
  border: 1px solid var(--freshgreen);
  border-radius: 5px;
  height: 100%;
  width: 100%;
  padding: 20px;
`
