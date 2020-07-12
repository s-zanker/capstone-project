import React from 'react'
import Workspace from '../Workspace/Workspace'
import styled from 'styled-components'

export default function WorkspaceList({ workspaces }) {
  return (
    <>
      <ListTitleStyled>Naturnahe Coworking Spaces</ListTitleStyled>
      <Grid>
        {workspaces.map((workspace) => (
          <Workspace workspace={workspace} key={workspace._id} />
        ))}
      </Grid>
    </>
  )
}

const Grid = styled.div`
  display: grid;
  gap: 30px;
  justify-content: center;
`
const ListTitleStyled = styled.h3`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`
