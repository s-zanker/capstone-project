import React from 'react'
import styled from 'styled-components'
import Tag from '../Tag/Tag'

export default function WorkspaceTagList({ tagList }) {
  return (
    <>
      <TagContainerStyled>
        {tagList.map((tag) => (
          <Tag title={tag} clickable />
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
