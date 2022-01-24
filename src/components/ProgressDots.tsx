import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

type Props = {
  steps: number,
  activeStep: number,
}

export default function ProgressDots({
  steps,
  activeStep
}: Props) {
  const pips: any = [];
  for (var i = 0; i < steps; i++) {
    pips.push({ style: [styles.circle, activeStep > i ? styles.active: styles.inactive]})
  }
  return (
    <View style={styles.container}>
      {
        pips.map(({ style }: any, index: number) => (<View style={style} key={index} />))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 17,
    flexDirection: 'row',
  },
  circle: {
    height: 12,
    width: 12,
    borderRadius: 12,
    marginRight: 15,
    backgroundColor: 'white',
  },
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0.3,
  }
})
