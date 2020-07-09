import React from 'react'
import Workspace from '../Workspace/Workspace'

export default function WorkspaceList({ workspaces }) {
  return (
    <>
      <h2>Coworking Spaces</h2>
      {workspaces.map((workspace) => (
        <Workspace workspace={workspace} key={workspace._id} />
      ))}
    </>
  )
}
