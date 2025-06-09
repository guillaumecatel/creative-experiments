import type { Meta, StoryObj } from '@storybook/react-vite'

import { Rizo } from './'

const meta = {
  title: 'Three.js/Rizo',
  component: Rizo,
} satisfies Meta<typeof Rizo>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
