import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LusciousMarble } from '.'

export default {
  title: '3D/LusciousMarble',
  component: LusciousMarble
} as ComponentMeta<typeof LusciousMarble>

const Template: ComponentStory<typeof LusciousMarble> = () => <LusciousMarble />

export const Primary = Template.bind({})
