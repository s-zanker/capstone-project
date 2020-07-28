import React from 'react'
import WorkspaceTagList from './TagList'

export default {
  title: 'WorkspaceTagList',
  component: WorkspaceTagList,
}

export const withTags = () => <WorkspaceTagList tagList="tag platzhalter" />
