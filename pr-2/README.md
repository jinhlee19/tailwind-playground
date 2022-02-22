# 1. Create your project

```shell
npx create-react-app my-project
cd my-project
```

# 2. Install Tailwind CSS

```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

# 3. Configure your template paths

```javascript
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

# 4. Add the Tailwind directives to your CSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# 5. Start your build process

```shell
npm run start
```

[https://tailwindcss.com/docs/guides/create-react-app]
