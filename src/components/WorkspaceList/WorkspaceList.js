import React, { useState } from 'react'
import Workspace from '../Workspace/Workspace'
import styled from 'styled-components'
import Button from '../Button/Button'
import TagList from '../TagList/TagList'

export default function WorkspaceList({ workspaces }) {
  const [tagListShown, setTagListShown] = useState(false)
  return (
    <>
      <ListTitleStyled>Naturnahe Coworking Spaces</ListTitleStyled>

      <Grid>
        <Button name="filter" onClick={toggleTagList} />
        {tagListShown && <TagList tagList="tagList" />}
        {workspaces.map((workspace) => (
          <Workspace workspace={workspace} key={workspace._id} />
        ))}
      </Grid>
    </>
  )

  function toggleTagList() {
    setTagListShown(!tagListShown)
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
