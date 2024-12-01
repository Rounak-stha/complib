// https://atlassian.design/components/tokens/all-tokens#color-text
// https://atlassian.design/foundations/color-new/color-palette-new
// https://atlassian.design/foundations/color-new

const primitive = {
  blue: {
    100: 'var(--color-blue-100)',
    200: 'var(--color-blue-200)',
    300: 'var(--color-blue-300)',
    400: 'var(--color-blue-400)',
    500: 'var(--color-blue-500)',
    600: 'var(--color-blue-600)',
    700: 'var(--color-blue-700)',
    800: 'var(--color-blue-800)',
    900: 'var(--color-blue-900)',
    1000: 'var(--color-blue-1000)',
  },
  green: {
    100: 'var(--color-green-100)',
    200: 'var(--color-green-200)',
    300: 'var(--color-green-300)',
    400: 'var(--color-green-400)',
    500: 'var(--color-green-500)',
    600: 'var(--color-green-600)',
    700: 'var(--color-green-700)',
    800: 'var(--color-green-800)',
    900: 'var(--color-green-900)',
    1000: 'var(--color-green-1000)',
  },
  orange: {
    100: 'var(--color-orange-100)',
    200: 'var(--color-orange-200)',
    300: 'var(--color-orange-300)',
    400: 'var(--color-orange-400)',
    500: 'var(--color-orange-500)',
    600: 'var(--color-orange-600)',
    700: 'var(--color-orange-700)',
    800: 'var(--color-orange-800)',
    900: 'var(--color-orange-900)',
    1000: 'var(--color-orange-1000)',
  },
  purple: {
    100: 'var(--color-purple-100)',
    200: 'var(--color-purple-200)',
    300: 'var(--color-purple-300)',
    400: 'var(--color-purple-400)',
    500: 'var(--color-purple-500)',
    600: 'var(--color-purple-600)',
    700: 'var(--color-purple-700)',
    800: 'var(--color-purple-800)',
    900: 'var(--color-purple-900)',
    1000: 'var(--color-purple-1000)',
  },
  teal: {
    100: 'var(--color-teal-100)',
    200: 'var(--color-teal-200)',
    300: 'var(--color-teal-300)',
    400: 'var(--color-teal-400)',
    500: 'var(--color-teal-500)',
    600: 'var(--color-teal-600)',
    700: 'var(--color-teal-700)',
    800: 'var(--color-teal-800)',
    900: 'var(--color-teal-900)',
    1000: 'var(--color-teal-1000)',
  },
  yellow: {
    100: 'var(--color-yellow-100)',
    200: 'var(--color-yellow-200)',
    300: 'var(--color-yellow-300)',
    400: 'var(--color-yellow-400)',
    500: 'var(--color-yellow-500)',
    600: 'var(--color-yellow-600)',
    700: 'var(--color-yellow-700)',
    800: 'var(--color-yellow-800)',
    900: 'var(--color-yellow-900)',
    1000: 'var(--color-yellow-1000)',
  },
  lime: {
    100: 'var(--color-lime-100)',
    200: 'var(--color-lime-200)',
    300: 'var(--color-lime-300)',
    400: 'var(--color-lime-400)',
    500: 'var(--color-lime-500)',
    600: 'var(--color-lime-600)',
    700: 'var(--color-lime-700)',
    800: 'var(--color-lime-800)',
    900: 'var(--color-lime-900)',
    1000: 'var(--color-lime-1000)',
  },
  red: {
    100: 'var(--color-red-100)',
    200: 'var(--color-red-200)',
    300: 'var(--color-red-300)',
    400: 'var(--color-red-400)',
    500: 'var(--color-red-500)',
    600: 'var(--color-red-600)',
    700: 'var(--color-red-700)',
    800: 'var(--color-red-800)',
    900: 'var(--color-red-900)',
    1000: 'var(--color-red-1000)',
  },
  magenta: {
    100: 'var(--color-magenta-100)',
    200: 'var(--color-magenta-200)',
    300: 'var(--color-magenta-300)',
    400: 'var(--color-magenta-400)',
    500: 'var(--color-magenta-500)',
    600: 'var(--color-magenta-600)',
    700: 'var(--color-magenta-700)',
    800: 'var(--color-magenta-800)',
    900: 'var(--color-magenta-900)',
    1000: 'var(--color-magenta-1000)',
  },
  neutral: {
    0: 'var(--color-neutral-0)',
    100: 'var(--color-neutral-100)',
    200: 'var(--color-neutral-200)',
    300: 'var(--color-neutral-300)',
    400: 'var(--color-neutral-400)',
    500: 'var(--color-neutral-500)',
    600: 'var(--color-neutral-600)',
    700: 'var(--color-neutral-700)',
    800: 'var(--color-neutral-800)',
    900: 'var(--color-neutral-900)',
    1000: 'var(--color-neutral-1000)',
  },
} as const;

const semantic = {
  primary: {
    subtle: primitive.blue[100],
    hover: primitive.blue[200],
    pressed: primitive.blue[300],
    bold: primitive.blue[700],
    boldHover: primitive.blue[800],
    boldPressed: primitive.blue[900],
  },
  info: {
    subtle: primitive.blue[100],
    hover: primitive.blue[200],
    pressed: primitive.blue[300],
    bold: primitive.blue[700],
    boldHover: primitive.blue[800],
    boldPressed: primitive.blue[900],
  },
  danger: {
    subtle: primitive.red[100],
    subtleHover: primitive.red[200],
    subtlePressed: primitive.red[300],
    bold: primitive.red[700],
    boldHover: primitive.red[800],
    boldPressed: primitive.red[900],
  },
  success: {
    subtle: primitive.green[100],
    hover: primitive.green[200],
    pressed: primitive.green[300],
    bold: primitive.green[700],
    boldHover: primitive.green[800],
    boldPressed: primitive.green[900],
  },
  warning: {
    subtle: primitive.orange[100],
    hover: primitive.orange[200],
    pressed: primitive.orange[300],
    bold: primitive.orange[700],
    boldHover: primitive.orange[800],
    boldPressed: primitive.orange[900],
  },
  discovery: {
    subtle: primitive.purple[100],
    hover: primitive.purple[200],
    pressed: primitive.purple[300],
    bold: primitive.purple[700],
    boldHover: primitive.purple[800],
    boldPressed: primitive.purple[900],
  },
  disabled: primitive.neutral[100],
} as const;

export const borderColor = {
  DEFAULT: primitive.neutral[300],
  brand: {
    DEFAULT: primitive.blue[700],
    accent: primitive.blue[600],
  },
  danger: primitive.red[600],
  warning: primitive.orange[600],
  success: primitive.green[600],
  info: primitive.blue[600],
  discovery: primitive.purple[600],
} as const;

export const textColor = {
  DEFAULT: primitive.neutral[1000],
  inverse: primitive.neutral[0], // To be used on bold backgrounds
  brand: {
    DEFAULT: primitive.blue[700],
    accent: primitive.blue[800],
    bold: primitive.blue[900],
  },
  danger: primitive.red[700],
  warning: primitive.orange[700],
  success: primitive.green[700],
  info: primitive.blue[700],
  discovery: primitive.purple[700],
  subtle: primitive.neutral[700],
  disabled: primitive.neutral[700],
} as const;

export const backgroundColor = {
  DEFAULT: 'var(--color-background)',
  brand: primitive.blue[100],
};

export const ring = primitive.blue[700]; // ring color

export const ringOffsetColor = {
  DEFAULT: 'var(--color-background)',
};

export const card = 'var(--color-card)';

export const boxShadow = {
  card: 'var(--shadow-card)',
};

export const colors = {
  ...primitive,
  ...semantic,
  ring,
  card,
} as const;
