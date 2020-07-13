import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Workspace({ workspace }) {
  return (
    <StyledWorkspaceItem>
      <Link to={`/workspace/${workspace._id}`}>
        <img src={process.env.PUBLIC_URL + workspace.picture} alt="" />
      </Link>
      <h4>{workspace.name}</h4>
      <div className="p-green">
        {`${workspace.location} (${workspace.state})`}
      </div>
      <div className="p-green">
        <a href={workspace.url} target="_blank" rel="noopener noreferrer">
          {workspace.url}
        </a>
      </div>
    </StyledWorkspaceItem>
  )
}

const StyledWorkspaceItem = styled.div`
  h4 {
    margin-left: 10px;
  }

  div {
    margin-left: 10px;
  }
`
