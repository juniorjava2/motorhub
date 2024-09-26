/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"], // Enable dark mode using class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Use CSS variables for color definitions
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        tertiary: 'var(--tertiary)',
        'tertiary-foreground': 'var(--tertiary-foreground)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
      },
    },
  },
  plugins: [],
};

export default config;