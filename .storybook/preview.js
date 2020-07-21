import GlobalStyles from '../src/GlobalStyles'
import { addDecorator } from '@storybook/react'
import React from 'react'
import Center from './center'
import { MemoryRouter } from 'react-router-dom'

addDecorator((storyFn) => (
  <MemoryRouter>
    <Center>
      <GlobalStyles />
      {storyFn()}
    </Center>
  </MemoryRouter>
))
