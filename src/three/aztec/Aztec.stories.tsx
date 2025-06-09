import type { Meta, StoryObj } from '@storybook/react-vite'

import { Aztec } from './'

const meta = {
  title: 'Three.js/Aztec',
  component: Aztec,
} satisfies Meta<typeof Aztec>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
