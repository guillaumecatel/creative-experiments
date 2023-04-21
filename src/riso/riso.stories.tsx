import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Rizo } from '.'

const meta: Meta<typeof Rizo> = {
  title: '3D/Rizo',
  component: Rizo,
  argTypes: {
    scale: {
      control: { type: 'number' }
    }
  }
}

export default meta

type Story = StoryObj<typeof Rizo>

export const Primary: Story = {}
