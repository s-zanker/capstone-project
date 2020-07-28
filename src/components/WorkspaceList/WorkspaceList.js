import React, { useState, useEffect } from 'react'
import Workspace from '../Workspace/Workspace'
import styled from 'styled-components'
import Button from '../Button/Button'
import TagCloud from '../TagCloud/TagCloud'

export default function WorkspaceList({ workspaces }) {
  const [tagCloudShown, setTagCloudShown] = useState(false)
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

  useEffect(() => {
    console.log('useEffect - tagCloudShown: ' + tagCloudShown)
  }, [tagCloudShown])

  return (
    <>
      <ListTitleStyled>Naturnahe Coworking Spaces</ListTitleStyled>

      <Grid>
        <Button name="filtern" onClick={toggleTagCloud} />
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
    console.log('onclick tagCloudShown: ' + tagCloudShown)
  }

  function handleClickOnTag(name) {
    console.log('tag: ' + name)
  }
}

const Grid = styled.div`
  display: grid;
  gap: 30px;
  justify-content: center;
`
const ListTitleStyled = styled.h3`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
`
