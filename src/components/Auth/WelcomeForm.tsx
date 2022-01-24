import React from 'react'
import { View } from 'react-native'
import Background from '@junee/components/Background'
import Logo from '@junee/components/Logo'
import JuneeButton from '@junee/components/Button'
import JuneeText from '../Typography'
import { FooterView, FullPageView, HeroView } from '../Views'
const welcomeBackground = require('../../assets/welcome.png');

type Props = {
  onRegisterPressed: () => void,
  onLoginPressed: () => void,
}

export default function WelcomeForm({
  onRegisterPressed,
  onLoginPressed,
}: Props) {

  return (
    <Background backgroundImage={welcomeBackground}>
      <FullPageView>
        <HeroView>
          <Logo />
          <JuneeText variant="legend">Free reusa-bowls for your work lunch</JuneeText>
        </HeroView>
        <View style={{ height: '40%' }}>
          <JuneeButton
            onPress={onLoginPressed}
            style={{ marginTop: 24 }}
          >
            Join Junee
          </JuneeButton>
          <JuneeButton
            onPress={onRegisterPressed}
            style={{ marginTop: 24 }}
            variant="secondary"
          >
            Already a member?
          </JuneeButton>
        </View>
        <FooterView>
          <JuneeButton
            onPress={onRegisterPressed}
            style={{ marginTop: 24 }}
            variant="transparent"
          >
            Go back
          </JuneeButton>

        </FooterView>
      </FullPageView>
    </Background>
  )
}