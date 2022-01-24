import { theme } from '@junee/theme'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function JuneeText({
  variant = 'standard',
  style = {},
  children
}) {
  return (
    <Text
      style={[
        styles.base,
        styles[variant],
        style,
      ]}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  base: {
    marginTop: theme.spacing.standard,
  },
  legend: {
    fontSize: 36,
    lineHeight: 40,
    color: theme.colors.offWhite,
  },
  heading: {
    fontSize: 24,
    lineHeight: 26,
    color: theme.colors.primary,
  },
  footer: {
    fontSize: 14,
    lineHeight: 18,
    color: theme.colors.offWhite,
  },
  footerLight: {
    fontSize: 14,
    lineHeight: 18,
    color: theme.colors.third,
  },
  description: {
    fontSize: 18,
    lineHeight: 21,
    color: theme.colors.secondary
  },
  inline: {
    fontSize: 14,
    lineHeight: 22,
    color: theme.colors.white
  },
  huge: {
    fontSize: 52,
    lineHeight: 61,
    color: theme.colors.secondary,
    fontWeight: 'bold'
  }
})
