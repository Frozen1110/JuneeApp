import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import JuneeText from '../Typography'
import { theme } from '@junee/theme'
import { Check_svg } from '@junee/assets/icons'

type Props = {
    data: string,
    checked: boolean,
    onClick: () => void,
    style?: any
}

export default function SelectableListItem({
    data,
    checked,
    onClick,
    style = {}
}: Props) {
  return (
      <TouchableOpacity 
        style={[
          styles.container,
          checked && styles.activeContainer,
          style
        ]}
        activeOpacity={0.6}
        onPress={onClick}
      >
        {
            checked ? 
            <Check_svg width={18} height={18} style={{color: theme.colors.secondary}} />
            :
            <View style={styles.circle} />

        }
        <JuneeText
            variant='description'
            style={checked ? styles.activeTxt : styles.inactiveTxt}
        >
            {data}
        </JuneeText>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    activeContainer: {
        backgroundColor: theme.colors.lightGreen,
    },
    circle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: theme.colors.text.gray
    },
    activeTxt: {
        marginTop: 0,
        fontWeight: 'bold',
        color: theme.colors.secondary,
        marginLeft: 12
    },
    inactiveTxt: {
        marginTop: 0,
        color: theme.colors.text.gray,
        marginLeft: 12
    }
})