import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import workspaces from './assets/workspaces.json'
import Header from './components/Header/Header'
import WorkspaceDetail from './components/WorkspaceDetail/WorkspaceDetail'
import WorkspaceList from './components/WorkspaceList/WorkspaceList'

function App() {
  const [currentWorkspaces, setCurrentWorkspaces] = useState(workspaces)
  const selectedTagsLocalStorage = sortArrayInAlphabeticalOrder(
    JSON.parse(localStorage.getItem('selectedTags')) || []
  )

  useEffect(() => {
    if (selectedTagsLocalStorage.length > 0) {
      filterWorkspacesWithAllTags()
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {}, [currentWorkspaces])

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

  function filterWorkspacesWithAllTags() {
    console.log('tags to filter: ' + selectedTagsLocalStorage)
    const workspacesToFilter = []
    workspaces.map((workspace) => {
      const workspaceTagsSorted = sortArrayInAlphabeticalOrder(workspace.tags)
      let tagMatchesFound = 0

      selectedTagsLocalStorage.map((tag) => {
        if (workspaceTagsSorted.includes(tag)) {
          tagMatchesFound += 1
        }
      })

      if (tagMatchesFound === selectedTagsLocalStorage.length) {
        console.log('workspace with all tags: ' + workspace.name)
        workspacesToFilter.push(workspace)
      }
      console.log(workspaceTagsSorted)
    })

    console.log(workspacesToFilter)
    setCurrentWorkspaces(workspacesToFilter)
  }

  function sortArrayInAlphabeticalOrder(array) {
    const arraySorted = array.sort((a, b) => {
      return a.toString().localeCompare(b)
    })
    return arraySorted
  }

  /* function filterWorkspacesWithOneTag() {
    console.log('filterWorkspaces() ------------------------------')
    console.log('selectedTagsLocalStorage: ' + selectedTagsLocalStorage)

    const workspacesToFilter = []
    const namesOfWorkspacesToFilter = []

    selectedTagsLocalStorage.map((tagToFilter) => {
      console.log('tagToFilter: ' + tagToFilter)

      workspaces.map((workspace) => {
        if (workspace.tags.includes(tagToFilter)) {
          console.log('Tag gefunden in: ' + workspace.name)
          if (!namesOfWorkspacesToFilter.includes(workspace.name)) {
            namesOfWorkspacesToFilter.push(workspace.name)
            workspacesToFilter.push(workspace)
          }
        }
      })
    })

    console.log('namesOfWorkspacesToFilter: ' + namesOfWorkspacesToFilter)

    setCurrentWorkspaces(workspacesToFilter)
  } */
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
