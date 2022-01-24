import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo(props) {
  const { type } = props
  if(type === 2) {
    return <Image source={require('../assets/logo/logo2.png')} style={styles.image} />
  } else {
    return <Image source={require('../assets/logo/logo1.png')} style={styles.image} />
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 50,
    marginBottom: 8,
  },
})
