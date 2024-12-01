import { colors, borderColor, textColor, backgroundColor, ringOffsetColor, boxShadow } from './src/styles/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './src/**/*stories.tsx', './.storybook/*.tsx'],
  darkMode: 'class',
  theme: {
    colors,
    borderColor,
    textColor,
    ringOffsetColor,
    extend: {
      backgroundColor,
      boxShadow,
    },
  },
  plugins: [],
};
