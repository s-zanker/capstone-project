import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import workspaces from './assets/workspaces.json'
import Header from './components/Header/Header'
import WorkspaceDetail from './components/WorkspaceDetail/WorkspaceDetail'
import WorkspaceList from './components/WorkspaceList/WorkspaceList'

function App() {
  const [currentWorkspaces, setCurrentWorkspaces] = useState([])

  useEffect(() => {
    //only the first 10 workspaces are displayed
    setCurrentWorkspaces(workspaces.slice(0, 10))
  }, [])

  return (
    <AppGrid>
      <Header title="digitalnatur" />
      <Main>
        <Switch>
          <Route exact path="/">
            <WorkspaceList workspaces={currentWorkspaces} />
          </Route>
          <Route path="/workspace/:id">
            <WorkspaceDetail workspaces={workspaces} />
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
