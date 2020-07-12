import React from 'react'
import Workspace from './Workspace'

export default {
  title: 'Workspace',
  component: Workspace,
}

export const withMockData = () => (
  <Workspace
    workspace={{
      _id: '5f046d06b8ff322a5ebd5c6a',
      name: 'Alsenhof',
      location: 'Lägerdorf',
      url: 'www.alsenhof.de',
      picture: '/images/justin-lim-acGAEEMguPo-unsplash.jpg',
    }}
  />
)

export const withoutAnUrl = () => (
  <Workspace
    workspace={{
      _id: '5f046d06b8ff322a5ebd5c6a',
      name: 'Alsenhof',
      location: 'Lägerdorf',
      url: '',
      picture: '/images/justin-lim-acGAEEMguPo-unsplash.jpg',
    }}
  />
)

export const withoutAnImage = () => (
  <Workspace
    workspace={{
      _id: '5f046d06b8ff322a5ebd5c6a',
      name: 'Alsenhof',
      location: 'Lägerdorf',
      url: 'www.alsenhof.de',
      picture: '',
    }}
  />
)

export const withNoData = () => <Workspace workspace={{}} />
