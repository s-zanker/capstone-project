import React from 'react'
import Workspace from '../Workspace/Workspace'
import styled from 'styled-components'

export default function WorkspaceList({ workspaces }) {
  return (
    <>
      <h2>Coworking Spaces</h2>
      <br />
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
