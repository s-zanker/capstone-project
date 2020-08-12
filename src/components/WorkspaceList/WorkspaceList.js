import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import workspaces from '../../assets/workspaces.json'
import Button from '../Button/Button'
import TagCloud from '../TagCloud/TagCloud'
import Workspace from '../Workspace/Workspace'

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
  }, [selectedTags])

  return (
    <>
      <ListTitleStyled>{listTitle.toUpperCase()}</ListTitleStyled>

      <Grid>
        <Button
          name={filterBtnTxt}
          onClick={!tagCloudShown ? toggleTagCloud : null}
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

  //show and hide tag cloud
  function toggleTagCloud() {
    setTagCloudShown(!tagCloudShown)
  }

  //select, unselect tags on click
  function handleClickOnTag(tagTitle, tagIsSelected) {
    if (!tagIsSelected && !selectedTags.includes(tagTitle)) {
      const updatedTags = [...selectedTags, tagTitle]
      setSelectedTags(updatedTags)
    } else {
      const updatedSelectedTags = selectedTags.filter((tag) => tag !== tagTitle)
      setSelectedTags([...updatedSelectedTags])
    }
  }

  //manage click on icons to filter or reset workspaces
  function handleIconClick(iconName) {
    if (iconName === 'filter') {
      filterWorkspacesWithAllTags()
    } else {
      for (let i = 0; i <= selectedTags.length; i++) {
        localStorage.setItem(selectedTags[i], false)
      }
      setSelectedTags([])
      setWorkspaceList(workspaces)
    }

    toggleTagCloud()
  }

  //filter workspaces based on selected tags
  function filterWorkspacesWithAllTags() {
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
        workspacesToFilter.push(workspace)
      }
    })

    setWorkspaceList(workspacesToFilter)
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
