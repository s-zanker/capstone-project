import React, { useState, useEffect } from 'react'
import Workspace from '../Workspace/Workspace'
import styled from 'styled-components'
import Button from '../Button/Button'
import TagCloud from '../TagCloud/TagCloud'

export default function WorkspaceList({ workspaces }) {
  const [tagCloudShown, setTagCloudShown] = useState(false)

  useEffect(() => {
    console.log('useEffect - tagCloudShown: ' + tagCloudShown)
  }, [tagCloudShown])

  return (
    <>
      <ListTitleStyled>Naturnahe Coworking Spaces</ListTitleStyled>

      <Grid>
        <Button name="filter" onClick={toggleTagCloud} />
        {tagCloudShown && <TagCloud tagList="platzhalter für die tags" />}
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
