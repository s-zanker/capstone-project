import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import workspaces from './assets/workspaces.json'
import Header from './components/Header/Header'
import WorkspaceDetail from './components/WorkspaceDetail/WorkspaceDetail'
import WorkspaceList from './components/WorkspaceList/WorkspaceList'
import { useEffect } from 'react'

function App() {
  const digitalnaturLogo = '/icons/digitalnatur-logo.svg'
  const [currentWorkspaces, setCurrentWorkspaces] = useState(workspaces)
  const mainContainer = document.getElementsByClassName('mainContainer')
  const [mainScrollTop, setMainScrollTop] = useState(0)

  useEffect(() => {
    mainContainer.item(0).addEventListener('scroll', rememberMainScrollPosition)
  }, [])

  return (
    <AppGrid>
      <Header logo={digitalnaturLogo} />
      <Main className="mainContainer">
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

  function rememberMainScrollPosition(event) {
    const mainElement = event.target
    setMainScrollTop(mainElement.scrollTop)
  }
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
