# 🪄 react-useless-components

A collection of useless React components nobody needs — but you’ll love them anyway!

---

## 🚀 Installation

npm:

```bash
npm install react-useless-components
```

yarn:

```bash
yarn add react-useless-components
```

pnpm

```bash
pnpm add react-useless-components
```

---

## 📦 Usage (For Library Users)

### 1️⃣ Importing components

Each component is exported from the library root:

```jsx
import { UselessButton } from "react-useless-components";

const MyButton = () => {
  return <UselessButton label="Click me" />;
};
```

#### Styles

The library automatically loads its own Tailwind CSS bundle,
so consumers do **NOT** need to install Tailwind just to use it.

### 2️⃣ Dark Mode Support (Tailwind v4)

This library supports Tailwind v4’s dark mode behavior.

👉 Tailwind v4 does NOT use darkMode: "class" anymore.
👉 Instead, it uses CSS variants, and this library already includes one:

@custom-variant dark (&:where(.dark, .dark \*));

This means:

✔ If your app sets

```html
<html lang="en" class="dark"></html>
```

all dark: styles inside the library’s components get activated.

Check this out for further information: https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually

### 3️⃣ How to toggle between light, dark, and system mode

Based on: https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually

```javascript
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches),
);
// Whenever the user explicitly chooses light mode
localStorage.theme = "light";
// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");
```

simple toggle for three way switch ("light", "dark", "system")

```javascript
const toggleTheme = (mode: "light" | "dark" | "system") => {
  const root = document.documentElement;

  if (mode === "light") {
    root.classList.remove("dark");
    localStorage.theme = "light";
  }

  if (mode === "dark") {
    root.classList.add("dark");
    localStorage.theme = "dark";
  }

  if (mode === "system") {
    root.classList.remove("dark");
    localStorage.removeItem("theme");
  }
}
```

---

## 🛠 Developer Guide (For Contributors)

This section is for people who want to clone, contribute, or develop the library.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-org>/react-useless-components.git
cd react-useless-components
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run Storybook (development mode)

The recommended way to develop components is inside Storybook:

```bash
npm run dev
```

This includes:

- Hot reload
- Live Tailwind updates
- Dark/light theme support
- Component playground

### 4️⃣ Building the library

To produce the library bundle (ESM, CJS, CSS):

```bash
npm run build
```

Outputs are written to:

```
dist/
├── index.js
├── index.cjs
├── index.d.ts
├── react-useless-components.css
└── components/
```

### 5️⃣ Type checking

```bash
npm run typecheck
```

This uses the root tsconfig.json for consistent type safety.

### 6️⃣ Project Architecture

```
react-useless-components/
│
├── src/
│   ├── index.ts                       # library entry point
│   ├── index.css                      # Tailwind v4 + custom dark variant
│   └── components/
│       ├── UselessButton/
│       │   ├── UselessButton.tsx
│
├── .storybook/
│   ├── main.ts                        # Storybook config
│   ├── preview.ts                     # Global decorators (theme toggling)
│   └── stories/                       # MDX / docs pages
│       │── UselessButton.stories.tsx  # Storybook
│
├── vite.config.ts                     # Build config (library mode)
├── tsconfig.json
├── tsconfig.lib.json
└── package.json
```

#### Key Design Decisions

Vite is used for fast dev & library builds.

Tailwind v4 is used without requiring the user to install Tailwind.

Storybook powers component development and documentation.

TypeScript ensures type-safe components.

CSS is auto-loaded so users don’t manually import styles.

### 7️⃣ Publishing (maintainers only)

Build the package:

```bash
npm run build
```

Publish:

```bash
npm publish --access public
```

Ensure you are logged into npm:

```bash
npm login
```

### 🤝 Contributing

Contributions are welcome!

Fork the project

Create a feature branch

```bash
git checkout -b feature/my-awesome-idea
```

Commit your changes

Open a PR

We review, merge and celebrate 🎉
