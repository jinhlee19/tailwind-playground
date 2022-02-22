# Process

## Step 1, 2, 3, 4

```shell
#1
npx create-react-app .

#2
npm i -D tailwindcss postcss-cli autoprefixer

#3 creates tailwind js
npx tailwind init tailwind.js --full

#4 postcss.config.js
npx tailwindcss init -p
# or
touch postcss.config.js
```

## Step 5

```javascript
// #5 tailwind.config.js 바꿔주기
const tailwindcss = require('tailwindcss');
module.exports = {
	content: ['./**/*.html', './public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
};
```

## Step 6

```css
/* tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 7

```json
// package.json
  "scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },
```

- 이후 npm start 하면 실행
- vite으로 하는 경우 이 과정을 거치지 않아도 되는건지 ∂_∂

### Vite 예시

```json
  // script
  "scripts": {
    "dev": "vite"
  },
  // dev
  "devDependencies": {
    "@vitejs/plugin-react-refresh": "^1.1.3",
    "autoprefixer": "^10.4.2",
    "postcss": "^8.4.6",
    "tailwindcss": "^2.2.19",
    "vite": "^2.8.4"
  },
```
