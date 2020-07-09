import React from 'react'
import styled from 'styled-components'

export default function Workspace({ workspace }) {
  return (
    <StyledWorkspaceItem>
      <img src={process.env.PUBLIC_URL + workspace.picture} alt="" />
      <h4>{workspace.name}</h4>
      <p>{workspace.location}</p>
      <p>{workspace.url}</p>
    </StyledWorkspaceItem>
  )
}

const StyledWorkspaceItem = styled.div``
