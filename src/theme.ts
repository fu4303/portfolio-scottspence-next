import { extendTheme } from '@chakra-ui/react'

/**
 * This theme object can be changed and edited however you like. It's currently extending the default Chakra theme
 * (which itself is inspired by Tailwind CSS) with the values below.
 * Example usage of theme values: <Text color="brand.100" fontSize="6xl" fontWeight="bold">Boop</Text>
 */
export const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
    key: 'chakra-ui-no-flash',
  },
  // If you're using gsap to animate then set the body visibility
  // to hidden in the theme. Then on each page set it to visible with gsap.
  // Otherwise you get a flash of non animation
  // styles: {
  //   global: {
  //     body: {
  //       visibility: 'hidden',
  //     },
  //   },
  // },
  colors: {
    brand: {
      100: '#E0AAFF',
      200: '#C77DFF',
      300: '#9D4EDD',
      400: '#7B2CBF',
      500: '#5A189A',
      600: '#3C096C',
      700: '#240046',
      800: '#10002B',
      900: '#070014',
    },
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fonts: {
    heading: 'Comic Sans MS',
    body: 'Times New Roman',
    mono: 'Victor Mono',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
})
