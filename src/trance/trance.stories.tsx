import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Trance } from '.'

const meta: Meta<typeof Trance> = {
  title: '3D/Trance',
  component: Trance
}

export default meta

type Story = StoryObj<typeof Trance>

export const Primary: Story = {}
