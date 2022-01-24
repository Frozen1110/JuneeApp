import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import JuneeText from '../Typography'
import { theme } from '@junee/theme'

type Props = {
    item: any,
    style?: any
}

export default function RestaurantItem({
    item,
    style={}
}: Props) {
  return (
      <View style={[styles.container, style]}>
        <Image 
            source={require(`../../assets/dummy/1.png`)}
            style={styles.image}
        />
        <JuneeText
            variant='description'
            style={{ color: theme.colors.black }}
        >
            {item.name}
        </JuneeText>
        <JuneeText
            variant='description'
            style={{marginTop: 4, color: theme.colors.secondary}}
        >
            {item.special}
        </JuneeText>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: 284,
        height: 176,
        borderRadius: 25
    }
})