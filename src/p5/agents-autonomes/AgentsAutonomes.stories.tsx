import type { Meta, StoryObj } from '@storybook/react-vite'

import { AgentsAutonomes } from './'

const meta = {
  title: 'P5.js/AgentsAutonomes',
  component: AgentsAutonomes,
} satisfies Meta<typeof AgentsAutonomes>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
