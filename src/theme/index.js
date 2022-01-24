import { DefaultTheme } from 'react-native-paper'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#003125',
    secondary: '#009D37',
    third: '#B7DAC3',
    offWhite: '#F0F9EB',
    white: "#fff",
    black: "#000",
    yellow: "#FFBC3A",
    gray: "#E5E5E5",
    lightGray: "#F2F2F2",
    inputBackground: '#B7DAC3',
    error: '#943500',
    lightGreen: '#E9FFF1',
    text: {
      gray: '#AAAAAA',
      darkGray: '#8E8E8E'
    },
    buttons: {
      primary: '#009D37',
      secondary: '#FFFFFF',
      third: '#003125',
      gray: '#C4C4C4',
      error: '#FFE0E0'
    },
    input: {
      primary: '#B7DAC3',
      secondary: '#E1ECE5'
    }
  },
  spacing: {
    standard: 17,
  },
  bottomTab: {
    height: 106,
  }
}
