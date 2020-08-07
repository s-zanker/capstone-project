import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import workspaces from './assets/workspaces.json'
import Header from './components/Header/Header'
import WorkspaceDetail from './components/WorkspaceDetail/WorkspaceDetail'
import WorkspaceList from './components/WorkspaceList/WorkspaceList'
import ScrollToTop from './lib/ScrollToTop'

function App() {
  const [currentWorkspaces, setCurrentWorkspaces] = useState(workspaces)

  return (
    <AppGrid>
      <ScrollToTop />
      <Header title="digitalnatur" />

      <Main>
        <Switch>
          <Route exact path="/">
            <WorkspaceList
              workspaceList={currentWorkspaces}
              setWorkspaceList={setCurrentWorkspaces}
            />
          </Route>
          <Route path="/workspace/:id">
            <WorkspaceDetail workspaces={currentWorkspaces} />
          </Route>
        </Switch>
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
  &::after {
    content: '';
    display: block;
    height: 40px;
  }
`
