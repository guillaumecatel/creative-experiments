import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Obscured } from '.'

const meta: Meta<typeof Obscured> = {
  title: '3D/Obscured',
  component: Obscured,
  argTypes: {
    scale: {
      control: { type: 'number' }
    }
  }
}

export default meta

type Story = StoryObj<typeof Obscured>

export const Primary: Story = {}
