import GlobalStyles from '../src/GlobalStyles'
import { addDecorator } from '@storybook/react'
import React from 'react'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))
