import type { Meta, StoryObj } from '@storybook/react-vite'

import { MoltenSpectrum } from './'

const meta = {
  title: 'Three.js/MoltenSpectrum',
  component: MoltenSpectrum,
} satisfies Meta<typeof MoltenSpectrum>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
