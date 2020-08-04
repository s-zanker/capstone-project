import React, { useEffect } from 'react'
import styled from 'styled-components'
import TagList from '../TagList/TagList'
import Icon from '../Icon/Icon'

export default function TagCloud({ tagList, onClick }) {
  const checkIcon = '/icons/check_freshgreen.svg'
  const resetIcon = '/icons/reset_darkgreen.svg'

  useEffect(() => {
    //console.log('TagCloud - useEffect')
  })

  return (
    <>
      <TagCloudContainerStyled>
        <TagList tagList={tagList} onClick={onClick} clickable={true} />
        <Icon icon={checkIcon} onClick={filterWorkspaces} clickable={true} />
        <Icon icon={resetIcon} onClick={filterWorkspaces} clickable={true} />
      </TagCloudContainerStyled>
    </>
  )

  function filterWorkspaces() {
    console.log('filter button clicked')
  }
}

const TagCloudContainerStyled = styled.div`
  background: white;
  border: 1px solid var(--freshgreen);
  border-radius: 5px;
  height: 100%;
  width: 100%;
  padding: 20px;
`
