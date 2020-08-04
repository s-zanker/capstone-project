import React, { useState, useEffect } from 'react'
import Workspace from '../Workspace/Workspace'
import styled from 'styled-components'
import Button from '../Button/Button'
import TagCloud from '../TagCloud/TagCloud'

export default function WorkspaceList({ workspaces }) {
  const arrowDown = '/icons/arrow_down_freshgreen.svg'
  const arrowUp = '/icons/arrow_up_freshgreen.svg'
  const filterBtnTxt = 'Finde einen Space, der zu dir passt'
  const listTitle = 'naturnahe Coworking Spaces'
  const tagList = [
    'Garten',
    'Waldbaden',
    'Übernachtung',
    'Retreat',
    'im Grünen',
    'See',
    'Kanufahren',
    'Wandern',
    'Naturschutzgebiet',
    'Reiten',
    'Gärtnern',
    'Radfahren',
    'Stadtnah',
    'Elbblick',
    'Flüsse',
    'Weinberge',
    'Coaching',
    'Cafes',
    'Wochenmarkt',
    'Tierpark',
    'Restaurants',
    'Werkstatt',
    'Angeln',
    'Golf',
    'Segelfliegen',
    'Yoga',
    'Park',
  ]
  const [tagCloudShown, setTagCloudShown] = useState(false)
  const [selectedTags, setSelectedTags] = useState(
    JSON.parse(localStorage.getItem('selectedTags')) || []
  )

  useEffect(() => {
    //console.log('Mounting WorkspaceList - selectedTags: ' + selectedTags)
  }, [])

  useEffect(() => {
    //console.log('WorkspaceList - useEffect - tagCloudShown: ' + tagCloudShown)
  }, [tagCloudShown])

  useEffect(() => {
    localStorage.setItem('selectedTags', JSON.stringify(selectedTags))
    //console.log('WorkspaceList - useEffect - setSelectedTags: ' + selectedTags)
  }, [selectedTags])

  return (
    <>
      <ListTitleStyled>{listTitle.toUpperCase()}</ListTitleStyled>

      <Grid>
        <Button
          name={filterBtnTxt}
          onClick={toggleTagCloud}
          icon={!tagCloudShown ? arrowDown : arrowUp}
        />
        {tagCloudShown && (
          <TagCloud tagList={tagList} onClick={handleClickOnTag} />
        )}
        {workspaces.map((workspace) => (
          <Workspace workspace={workspace} key={workspace._id} />
        ))}
      </Grid>
    </>
  )

  function toggleTagCloud() {
    setTagCloudShown(!tagCloudShown)
  }

  function handleClickOnTag(tagTitle, tagIsSelected) {
    console.log('--------------------------------')
    console.log('WorkspaceList - handleClickOnTag')
    console.log('tag: ' + tagTitle)
    console.log('tagIsSelected: ' + tagIsSelected)

    if (!tagIsSelected && !selectedTags.includes(tagTitle)) {
      const updatedTags = [...selectedTags, tagTitle]
      setSelectedTags(updatedTags)
    } else {
      const updatedSelectedTags = selectedTags.filter((tag) => tag !== tagTitle)
      setSelectedTags([...updatedSelectedTags])
      console.log('tag wird gelöscht')
    }

    console.log('--------------------------------')
  }
}

const Grid = styled.div`
  display: grid;
  gap: 30px;
  justify-content: center;
`
const ListTitleStyled = styled.h3`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 25px;
`
