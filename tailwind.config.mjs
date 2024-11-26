/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3ee4c4', // Vivid turquoise from your original theme
          light: '#5ff8d8',
          dark: '#2bc3a3'
        },
        secondary: {
          DEFAULT: '#e67e22', // Bright orange
          light: '#f39c12', // Vivid yellow-orange
          dark: '#d35400'
        },
        background: {
          DEFAULT: '#2c3e50', // Blue-black
          dark: '#34495e',    // Dark blue-gray
          light: '#3498db'    // Light blue
        },
        success: '#27ae60',   // Vivid green
        danger: '#c0392b',    // Vivid red
        text: {
          DEFAULT: '#ffffff', // White
          muted: '#a1b1b3'    // Gray-blue
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#ffffff',
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
            a: {
              color: '#3ee4c4',
              '&:hover': {
                color: '#5ff8d8',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}