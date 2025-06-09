import type { Meta, StoryObj } from '@storybook/react-vite'

import { Trance } from './'

const meta = {
  title: 'Three.js/Trance',
  component: Trance,
} satisfies Meta<typeof Trance>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
