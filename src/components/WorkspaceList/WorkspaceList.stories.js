import React from 'react'
import GlobalStyles from '../../GlobalStyles'
import { addDecorator } from '@storybook/react'
import WorkspaceList from './WorkspaceList'
import workspaces from '../../assets/workspaces.json'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

export default {
  title: 'WorkspaceList',
  component: WorkspaceList,
}

export const withDataOfJSON = () => <WorkspaceList workspaces={workspaces} />
