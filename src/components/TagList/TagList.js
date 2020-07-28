import React from 'react'
import styled from 'styled-components'
import Tag from '../Tag/Tag'

export default function TagList({ tagList, onClick }) {
  return (
    <>
      <TagContainerStyled>
        {tagList.map((tag) => (
          <Tag title={tag} onClick={onClick} />
        ))}
      </TagContainerStyled>
    </>
  )
}

const TagContainerStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`
