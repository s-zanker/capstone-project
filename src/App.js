import React from 'react'
import Header from './components/Header/Header'
import styled from 'styled-components'
import WorkspaceList from './components/WorkspaceList/WorkspaceList'
import workspaces from './assets/workspaces.json'

function App() {
  return (
    <AppGrid>
      <Header />
      <Main>
        <WorkspaceList workspaces={workspaces} />
      </Main>
    </AppGrid>
  )
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  height: 100vh;
`

const Main = styled.main`
  padding: 20px;
  overflow-y: scroll;
`
