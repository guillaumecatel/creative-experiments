import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Tapioca } from '.'

const meta: Meta<typeof Tapioca> = {
  title: '3D/Tapioca',
  component: Tapioca,
  argTypes: {
    scale: {
      control: { type: 'number' }
    }
  }
}

export default meta

type Story = StoryObj<typeof Tapioca>

export const Primary: Story = {}
