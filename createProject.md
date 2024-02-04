npm create vite 10reduxTodo
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

tailwindConfig
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

index.css

@tailwind base; 
@tailwind components; 
@tailwind utilities; 