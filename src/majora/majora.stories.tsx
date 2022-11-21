import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Majora } from './'

export default {
  title: '3D/Majora',
  component: Majora
} as ComponentMeta<typeof Majora>

const Template: ComponentStory<typeof Majora> = () => <Majora />

export const Primary = Template.bind({})
