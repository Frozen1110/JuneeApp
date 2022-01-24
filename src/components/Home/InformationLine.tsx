import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import JuneeText from '../Typography'
import { theme } from '@junee/theme'
import { Question_svg } from '@junee/assets/icons'

type Props = {
    data: string,
    backgroundColor: string,
    color: string
    onClick: () => void
}

export default function InformationLine({
    data,
    backgroundColor,
    color,
    onClick
}: Props) {
  return (
      <View style={[styles.container, {backgroundColor}]}>
          <JuneeText
            variant='description'
            style={{marginTop: 0, color}}
          >
              {data}
          </JuneeText>
          <TouchableOpacity activeOpacity={0.6} onPress={onClick}>
            <Question_svg width={18} height={18} style={{ color }} />
          </TouchableOpacity>

      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 13
    },
})