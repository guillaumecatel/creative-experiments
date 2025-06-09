# 🎨 creative-experiments

**creative-experiments** is a personal playground for creative coding.
It hosts a collection of visual sketches, shader explorations, and UX/UI interaction prototypes using modern web technologies.

This project merges generative art, visual experiments, and interface design.

## 🚀 Getting Started

The project uses [Storybook](https://storybook.js.org/) to showcase and test visual scenes.

### Prerequisites

- [pnpm](https://pnpm.io/)

### Install dependencies

```bash
pnpm install
```

### Run Storybook in development

```bash
pnpm dev
```

### Build Storybook for production

```bash
pnpm build
```

### Other commands

- Format code:

  ```bash
  pnpm format
  ```

- Lint:
  ```bash
  pnpm lint
  ```

## 🧰 Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Three.js](https://threejs.org/)
- [Shader Park](https://shaderpark.com/)
- [p5.js](https://p5js.org/)
- [GSAP](https://greensock.com/gsap/)
- [Storybook](https://storybook.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript, ESLint, Prettier

## 📁 Project Structure

```bash
src/
  three/
    └── ...
  p5/
    └── ...
  gsap/
    └── ...
  types/
  utils/
```

## 🧩 Custom Shader Park Plugin

This project includes a custom Vite plugin (`sp-code-vite-plugin.ts`) to parse `.sp` files and convert them into usable GLSL for Three.js.

## 🪪 License

MIT © Guillaume Catel
