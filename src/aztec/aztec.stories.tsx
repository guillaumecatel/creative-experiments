import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Aztec } from '.'

export default {
  title: '3D/Aztec',
  component: Aztec
} as ComponentMeta<typeof Aztec>

const Template: ComponentStory<typeof Aztec> = () => <Aztec />

export const Primary = Template.bind({})
