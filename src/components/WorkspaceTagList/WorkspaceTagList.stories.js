import React from 'react'
import WorkspaceTagList from './WorkspaceTagList'

export default {
  title: 'WorkspaceTagList',
  component: WorkspaceTagList,
}

export const withTags = () => <WorkspaceTagList tagList="tag platzhalter" />
