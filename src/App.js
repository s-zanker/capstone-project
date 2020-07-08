import React from 'react'
import Header from './components/Header/Header'
import styled from 'styled-components'
import WorkspaceList from './components/WorkspaceList/WorkspaceList'
import workspaces from './assets/workspaces.json'

function App() {
  return (
    <>
      <Header />
      <StyledTitle>Shared Workspaces</StyledTitle>
      <WorkspaceList workspaces={workspaces} />
    </>
  )
}

export default App

const StyledTitle = styled.h2`
  text-align: center;
`
