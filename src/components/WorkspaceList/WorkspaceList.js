import React from 'react'
import Workspace from '../Workspace/Workspace'

export default function WorkspaceList({ workspaces }) {
  return (
    <>
      {workspaces.map((workspace) => (
        <Workspace workspace={workspace} />
      ))}
    </>
  )
}
