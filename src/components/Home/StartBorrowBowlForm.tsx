import React from 'react'
import { View, StyleSheet } from 'react-native'
import JuneeButton from '@junee/components/Button'
import JuneeText from '../Typography'
import { theme } from '@junee/theme'
import { Restaurant_svg, Question_svg, Scan_svg } from '@junee/assets/icons'

type Props = {
    onShowDescription?: () => void,
    onBorrowBowl: () => void,
    isNew: boolean
}

export default function StartBorrowBowlForm({
    onShowDescription,
    onBorrowBowl,
    isNew
}: Props) {
  return (
      <View style={styles.container}>
            <View style={styles.row}>
                <Restaurant_svg width={50} height={50} style={{color: theme.colors.primary}} />
                <View style={{marginLeft: 20, flex: 1}}>
                    <JuneeText variant="description" style={{color: theme.colors.white, marginTop: 0}}>
                        {isNew ? "Get your lunch with\nno plastic waste" : "Lunch today"}
                    </JuneeText>
                    <JuneeText variant="description" style={{color: theme.colors.primary, marginTop: 6}}>
                        {"When ready to order at a junee restaurant, click ‘Borrow bowls’ to start"}
                    </JuneeText>
                </View>
            </View>
            {
                isNew &&
                <JuneeButton
                    variant="secondary"
                    onPress={onShowDescription}
                    icon={<Question_svg width={18} height={18} style={{color: theme.colors.secondary, marginRight: 13}}/>}
                >
                    How junee works
                </JuneeButton>
            }      
            <JuneeButton
                variant="third"
                onPress={onBorrowBowl}
                icon={<Scan_svg width={27} height={27} style={{color: theme.colors.white, marginRight: 13}}/>}
            >
                Borrow bowls
            </JuneeButton>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: theme.colors.secondary,
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    }
})