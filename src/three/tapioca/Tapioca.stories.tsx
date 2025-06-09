import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tapioca } from './'

const meta = {
  title: 'Three.js/Tapioca',
  component: Tapioca,
} satisfies Meta<typeof Tapioca>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
