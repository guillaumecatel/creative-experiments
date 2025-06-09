import type { Meta, StoryObj } from '@storybook/react-vite'

import { LusciousMarble } from './'

const meta = {
  title: 'Three.js/LusciousMarble',
  component: LusciousMarble,
} satisfies Meta<typeof LusciousMarble>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
