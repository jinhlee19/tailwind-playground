# Sass + Tailwind Setup

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

to

```json
"scripts": {
    "start": "npm run build:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/styles/tailwind.scss -o src/styles/index.scss "
  }
```

참고: [https://adebola-niran.medium.com/how-to-setup-tailwindcss-with-create-react-app-and-s-b7243607c3e7]
=> 하지만 실패... (2021.11.5 이후 v3. 찾아봐야할듯.)
