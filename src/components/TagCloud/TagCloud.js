import React, { useEffect } from 'react'
import styled from 'styled-components'
import TagList from '../TagList/TagList'
import Icon from '../Icon/Icon'

export default function TagCloud({ tagList, onTagClick, onIconClick }) {
  const checkIcon = '/icons/check_freshgreen.svg'
  const resetIcon = '/icons/reset_freshgreen.svg'

  useEffect(() => {
    //console.log('TagCloud - useEffect')
  })

  return (
    <>
      <TagCloudContainerStyled>
        <TagList tagList={tagList} onClick={onTagClick} clickable={true} />
        <IconButtonBox>
          <Icon
            icon={checkIcon}
            name={'filter'}
            onIconClick={onIconClick}
            clickable={true}
          />
          <Icon
            icon={resetIcon}
            name={'reset'}
            onIconClick={onIconClick}
            clickable={true}
          />
        </IconButtonBox>
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

const IconButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
`
