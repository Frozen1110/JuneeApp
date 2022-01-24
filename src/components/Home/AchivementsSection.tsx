import React from 'react'
import { View, StyleSheet } from 'react-native'
import JuneeText from '../Typography'
import { theme } from '@junee/theme'
import { Cup_svg } from '@junee/assets/icons'

type Props = {
    teamSaved: Number,
    singleSaved: Number
}

export default function AchivementsSection({
    teamSaved,
    singleSaved
}: Props) {
  return (
      <View style={styles.container}>
          <View style={styles.row}>
            <Cup_svg width={15} height={15} style={{color: theme.colors.black}} />
            <JuneeText
                variant='description'
                style={{marginTop: 0, color: theme.colors.black, marginLeft: 9}}
            >
                Your achievements
            </JuneeText>
          </View>
          <View style={styles.row}>
            <View style={{flex: 0.5}}>
                <JuneeText 
                    variant='huge'
                >
                    {teamSaved}
                </JuneeText>
                <JuneeText
                    variant='footer'
                    style={{marginTop: 4, color: theme.colors.black}}
                >
                    Single-use plastic bowls saved by your team 
                </JuneeText>
            </View>
            <View style={{flex: 0.5}}>
                <JuneeText 
                    variant='huge'
                >
                    {singleSaved}
                </JuneeText>
                <JuneeText
                    variant='footer'
                    style={{marginTop: 4, color: theme.colors.black}}
                >
                    Single-use plastic bowls saved by you
                </JuneeText>
            </View>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.yellow,
        padding: 18
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})