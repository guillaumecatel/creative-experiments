import type { Meta, StoryObj } from '@storybook/react-vite'

import { Majora } from './'

const meta = {
  title: 'Three.js/Majora',
  component: Majora,
} satisfies Meta<typeof Majora>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
