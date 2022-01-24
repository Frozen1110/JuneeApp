import React from 'react'
import { View, StyleSheet } from 'react-native'
import JuneeButton from '@junee/components/Button'
import JuneeText from '../Typography'
import { theme } from '@junee/theme'
import { Scan_svg } from '@junee/assets/icons'

type Props = {
    bowlCount: Number,
    onReturnBowl: () => void,
    onAlreadyReturned: () => void
}

export default function ReturnBowlForm({
    onReturnBowl,
    onAlreadyReturned,
    bowlCount
}: Props) {
  return (
      <View style={styles.container}>
            <JuneeText variant="description" style={{color: theme.colors.white, marginTop: 0}}>
                Return your bowls
            </JuneeText>
            <JuneeText variant="description" style={{color: theme.colors.secondary, marginTop: 3}}>
                {`You have ${bowlCount} bowls to be returned`}
            </JuneeText>
            <JuneeButton
                variant="primary"
                onPress={onReturnBowl}
                icon={<Scan_svg width={27} height={27} style={{color: theme.colors.white, marginRight: 13}}/>}
            >
                Return now
            </JuneeButton>
            <JuneeButton
                variant="secondary"
                onPress={onAlreadyReturned}
            >
                I've already returned
            </JuneeButton>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 16
    }
})