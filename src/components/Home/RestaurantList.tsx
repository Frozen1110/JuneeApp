import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import JuneeText from '../Typography'
import { theme } from '@junee/theme'
import RestaurantItem from './RestaurantItem'
import JuneeButton from '../Button'

type Props = {
    onViewMap: () => void,
    list: Array<any>,
}

export default function RestaurantList({
    onViewMap,
    list
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <JuneeText
          variant='description'
          style={{color: theme.colors.black, marginTop: 0}}
        >
          {`${list.length} junee restaurants near you`}
        </JuneeText>
        <JuneeButton
          variant='small'
          onPress={onViewMap}
          style={{marginTop: 0}}
        >
          View Map
        </JuneeButton>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 20}}
      >
        {
            list && list.map((item, index) => {
                return (
                    <RestaurantItem 
                        key={index} 
                        item={item} 
                        style={[index === 0 && {marginLeft: 18}, {marginRight: 24}]}
                    />
                )
            })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        paddingVertical: 14
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16
    },
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 80
    }
})