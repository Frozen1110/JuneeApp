import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native'
import { theme } from '@junee/theme'
import { TouchableOpacity } from 'react-native'

export default function JuneeButton({
  onPress,
  style = {},
  variant = 'primary',
  children,
  icon = <Text></Text>,
  active = true
}) {
  const buttonStyle = buttonVariants[variant];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        buttonStyle.button,
        style,
      ]}
      disabled={!active}
    >
      {icon}
      <Text
        style={[
          buttonStyle.text,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const contained = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.standard,
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
  },
})

const primary = StyleSheet.create({
  button: {
    ...contained.button,
    backgroundColor: theme.colors.buttons.primary
  },
  text: {
    ...contained.text,
    color: theme.colors.buttons.secondary
  },
})

const secondary = StyleSheet.create({
  button: {
    ...contained.button,
    backgroundColor: theme.colors.buttons.secondary
  },
  text: {
    ...contained.text,
    color: theme.colors.secondary
  },
})

const third = StyleSheet.create({
  button: {
    ...contained.button,
    backgroundColor: theme.colors.buttons.third
  },
  text: {
    ...contained.text,
    color: theme.colors.white
  },
})

const lightGreen = StyleSheet.create({
  button: {
    ...contained.button,
    backgroundColor: theme.colors.third
  },
  text: {
    ...contained.text,
    color: theme.colors.primary
  },
})

const transparent = StyleSheet.create({
  button: {
    width: '100%',
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    color: theme.colors.white
  },
})

const small = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 25,
    marginTop: theme.spacing.standard,
    backgroundColor: theme.colors.primary
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: theme.colors.white
  },
})

const small2 = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 25,
    marginTop: theme.spacing.standard,
    backgroundColor: theme.colors.white
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: theme.colors.primary
  },
})

const small3 = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 25,
    marginTop: theme.spacing.standard,
    backgroundColor: theme.colors.secondary
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: theme.colors.white
  },
})

const disabled = StyleSheet.create({
  button: {
    ...contained.button,
    backgroundColor: theme.colors.buttons.gray
  },
  text: {
    ...contained.text,
    color: theme.colors.white
  },
})

const buttonVariants = {
  primary,
  secondary,
  third,
  transparent,
  lightGreen,
  disabled,
  small,
  small2,
  small3
}
