import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import workspaces from './assets/workspaces.json'
import Header from './components/Header/Header'
import WorkspaceDetail from './components/WorkspaceDetail/WorkspaceDetail'
import WorkspaceList from './components/WorkspaceList/WorkspaceList'

function App() {
  const [workspaceList, setWorkspaceList] = useState(workspaces)

  /*  useEffect(() => {
    addWorkspace(
      JSON.stringify({
        _id: '5f0734c2af7264771ca52659',
        name: 'Alsenhof',
        description:
          'Gemeinsam lassen wir nördlich von Hamburg einen nachhaltigen, innovativen und offenen Lebens- und Arbeitsort im Grünen entstehen!',
        location: 'Lägerdorf',
        street: 'Dorfstraße 15',
        postcode: '25566',
        state: 'Schleswig-Holstein',
        url: 'https://www.alsenhof.de',
        email: 'ulrich@coworkland.de',
        phone: '+49 40 60942876',
        picture: '/images/justin-lim-acGAEEMguPo-unsplash.jpg',
      })
    )
  }, []) */
  return (
    <AppGrid>
      <Header title="digitalnatur" />
      <Main>
        <Switch>
          <Route exact path="/">
            <WorkspaceList workspaces={workspaceList} />
          </Route>
          <Route path="/workspace/:id">
            <WorkspaceDetail workspaces={workspaceList} />
          </Route>
        </Switch>
      </Main>
    </AppGrid>
  )

  function addWorkspace(newWorkspace) {
    setWorkspaceList(...workspaceList, newWorkspace)
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
