import React from 'react'
import styled from 'styled-components'

export default function Workspace({ workspace }) {
  return (
    <StyledWorkspaceItem>
      <img src={process.env.PUBLIC_URL + workspace.picture} alt="" />
      <h4>{workspace.name}</h4>
      <div className="p-green">{workspace.location}</div>
      <div className="p-green">{workspace.url}</div>
    </StyledWorkspaceItem>
  )
}

const StyledWorkspaceItem = styled.div`
  margin-bottom: 40px;

  h4 {
    margin-left: 10px;
  }

  div {
    margin-left: 10px;
  }
`
