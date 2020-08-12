import React from 'react'
import styled from 'styled-components'
import Tag from '../Tag/Tag'

export default function TagList({ tagList, onClick, clickable }) {
  return (
    <>
      <TagContainerStyled>
        {tagList.map((tag, index) => (
          <Tag
            title={tag}
            onClick={onClick}
            clickable={clickable}
            key={tag + index}
          />
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
  margin-bottom: 20px;
`
