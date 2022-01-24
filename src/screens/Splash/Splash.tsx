import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { checkUserToken } from '@junee/api/network-service';
import Background from '@junee/components/Background'
import Logo from '@junee/components/Logo'
import { FooterView, FullPageView, HeaderView, NormalView } from "@junee/components/Views";
import { theme } from '@junee/theme';
const splashBackground = require('../../assets/splash.png');

type Props = {
  navigation: any
}

const steps = [
  { number: 1, text: 'Borrow' },
  { number: 2, text: 'Eat' },
  { number: 3, text: 'Return' },
  { number: 4, text: 'Repeat' },
]

const Splash = ({
  navigation
}: Props) => {
  const checkToken = async () => {
    
    const { hasToken, isValidAppVersion } = await checkUserToken();
    setTimeout(() => {
      doNavigation(hasToken, isValidAppVersion);
    }, 2000)
    
  }

  const doNavigation = (hasToken: boolean, isValidAppVersion: boolean) => {
    if (!isValidAppVersion) {
      navigation.navigate('UpdateStack');
    } else if (hasToken) {
      navigation.navigate('CoreStack');
    } else {
      navigation.navigate('CoreStack');
      //navigation.navigate('LoginStack');
    }
  }

  useEffect(() => {
    checkToken();
  }, [])

  return (
    <Background
      backgroundImage={splashBackground}
      statusBar={false}
    >
      <FullPageView>
        <HeaderView>
          <Logo />
        </HeaderView>
        <NormalView style={{marginTop: 50}}>
        {
          steps.map(({ number, text }, index) => (
            <SplashStep number={number} text={text} key={index}/>
          ))
        }
        </NormalView>
      </FullPageView>
    </Background>
  );
}

type SplashProps = {
  number: number,
  text: string,
}

const SplashStep = ({
  number,
  text
}: SplashProps) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listNumber}>{number}</Text>
      <Text style={styles.listText}>{text}</Text>
    </View>    
  )
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
  },
  listItem: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  listNumber: {
    color: theme.colors.offWhite,
    backgroundColor: theme.colors.primary,
    fontSize: 50,
    width: 72,
    height: 72,
    textAlign: "center",
    borderRadius: 36,
  },
  listText: {
    fontSize: 36,
    color: theme.colors.offWhite,

    marginLeft: 22,
  }
})

export default Splash;
