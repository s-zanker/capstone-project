import React from 'react'
import WorkspaceList from './WorkspaceList'
import workspaces from '../../assets/workspaces.json'

export default {
  title: 'WorkspaceList',
  component: WorkspaceList,
}

export const withDataOfJSON = () => <WorkspaceList workspaces={workspaces} />
