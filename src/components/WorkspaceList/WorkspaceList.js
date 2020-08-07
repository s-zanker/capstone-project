import React, { useState, useEffect } from 'react'
import workspaces from '../../assets/workspaces.json'
import Workspace from '../Workspace/Workspace'
import styled from 'styled-components'
import Button from '../Button/Button'
import TagCloud from '../TagCloud/TagCloud'

export default function WorkspaceList({ workspaceList, setWorkspaceList }) {
  const arrowDown = '/icons/arrow_down_freshgreen.svg'
  const arrowUp = '/icons/arrow_up_freshgreen.svg'
  const filterBtnTxt = 'Finde einen Space, der zu dir passt'
  const listTitle = 'naturnahe Coworking Spaces'
  const tagList = [
    'Garten',
    'Waldbaden',
    'Übernachtung',
    'Retreat',
    'im Grünen',
    'See',
    'Kanufahren',
    'Wandern',
    'Naturschutzgebiet',
    'Reiten',
    'Gärtnern',
    'Radfahren',
    'Stadtnah',
    'Elbblick',
    'Flüsse',
    'Weinberge',
    'Coaching',
    'Cafes',
    'Wochenmarkt',
    'Tierpark',
    'Restaurants',
    'Werkstatt',
    'Angeln',
    'Golf',
    'Segelfliegen',
    'Yoga',
    'Park',
  ]
  const [tagCloudShown, setTagCloudShown] = useState(false)
  const [selectedTags, setSelectedTags] = useState(
    JSON.parse(localStorage.getItem('selectedTags')) || []
  )

  useEffect(() => {
    filterWorkspacesWithAllTags()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    localStorage.setItem('selectedTags', JSON.stringify(selectedTags))
    console.log('WorkspaceList - useEffect - setSelectedTags: ' + selectedTags)
  }, [selectedTags])

  return (
    <>
      <ListTitleStyled>{listTitle.toUpperCase()}</ListTitleStyled>

      <Grid>
        <Button
          name={filterBtnTxt}
          onClick={toggleTagCloud}
          icon={!tagCloudShown ? arrowDown : arrowUp}
        />
        {tagCloudShown && (
          <TagCloud
            tagList={tagList}
            onTagClick={handleClickOnTag}
            onIconClick={handleIconClick}
          />
        )}
        {workspaceList.map((workspace) => (
          <Workspace workspace={workspace} key={workspace._id} />
        ))}
      </Grid>
    </>
  )

  function toggleTagCloud() {
    setTagCloudShown(!tagCloudShown)
  }

  function handleIconClick(iconName) {
    console.log('-------------------------------')
    console.log('WorkspaceList - handleIconClick')
    if (iconName === 'filter') {
      console.log('Filter Workspaces nach Tags')
      filterWorkspacesWithAllTags()
    } else {
      console.log('Reset Workspaces und Tags')
      for (let i = 0; i <= selectedTags.length; i++) {
        localStorage.setItem(selectedTags[i], false)
      }

      setSelectedTags([])
      setWorkspaceList(workspaces)
    }

    toggleTagCloud()
    console.log('-------------------------------')
  }

  function handleClickOnTag(tagTitle, tagIsSelected) {
    console.log('--------------------------------')
    console.log('WorkspaceList - handleClickOnTag')
    console.log('tag: ' + tagTitle)

    if (!tagIsSelected && !selectedTags.includes(tagTitle)) {
      const updatedTags = [...selectedTags, tagTitle]
      setSelectedTags(updatedTags)
    } else {
      const updatedSelectedTags = selectedTags.filter((tag) => tag !== tagTitle)
      setSelectedTags([...updatedSelectedTags])
      console.log('tag wird gelöscht')
    }
    console.log('--------------------------------')
  }

  function filterWorkspacesWithAllTags() {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    console.log('filterWorkspacesWithAllTags')
    console.log('---------------------------')
    console.log('selectedTags: ' + selectedTags)
    const workspacesToFilter = []
    workspaces.map((workspace) => {
      const workspaceTagsSorted = sortArrayInAlphabeticalOrder(workspace.tags)
      let tagMatchesFound = 0

      selectedTags.map((tag) => {
        if (workspaceTagsSorted.includes(tag)) {
          tagMatchesFound += 1
        }
      })

      if (tagMatchesFound === selectedTags.length) {
        //console.log('workspace with all tags: ' + workspace.name)
        workspacesToFilter.push(workspace)
      }
      console.log(workspaceTagsSorted)
    })

    setWorkspaceList(workspacesToFilter)
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  }

  function sortArrayInAlphabeticalOrder(array) {
    const arraySorted = array.sort((a, b) => {
      return a.toString().localeCompare(b)
    })
    return arraySorted
  }
}

const Grid = styled.div`
  display: grid;
  gap: 30px;
  justify-content: center;
`
const ListTitleStyled = styled.h3`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 25px;
`
