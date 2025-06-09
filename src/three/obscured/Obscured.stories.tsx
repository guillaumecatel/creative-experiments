import type { Meta, StoryObj } from '@storybook/react-vite'

import { Obscured } from './'

const meta = {
  title: 'Three.js/Obscured',
  component: Obscured,
} satisfies Meta<typeof Obscured>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
