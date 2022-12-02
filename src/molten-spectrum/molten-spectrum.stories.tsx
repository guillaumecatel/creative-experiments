import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MoltenSpectrum } from '.'

export default {
  title: '3D/MoltenSpectrum',
  component: MoltenSpectrum
} as ComponentMeta<typeof MoltenSpectrum>

const Template: ComponentStory<typeof MoltenSpectrum> = () => <MoltenSpectrum />

export const Primary = Template.bind({})
