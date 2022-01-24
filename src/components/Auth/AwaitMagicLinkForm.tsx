import React from 'react'
import Background from '@junee/components/Background'
import Logo from '@junee/components/Logo'
import JuneeButton from '@junee/components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FooterView, FullPageView, HeaderView, NormalView } from '../Views'
import JuneeText from '../Typography'
import ProgressDots from '../ProgressDots'

type Props = {
  navigateBack: () => void,
  navigateNext: () => void,
  alreadyMember: boolean
}

export default function LoginForm({
  navigateBack,
  navigateNext,
  alreadyMember
}: Props) {
  return (
    <KeyboardAwareScrollView>
      <Background>
        <HeaderView>
          <Logo />
        </HeaderView>
        <FullPageView>
          <NormalView style={{marginTop: 80}}>
            <JuneeText variant="legend">Click the link in your email to login</JuneeText>
            <ProgressDots steps={alreadyMember ? 2 : 4} activeStep={2} />
            <JuneeText variant="description">
              There's no need for password
            </JuneeText>
          </NormalView>
          <FooterView>
            <JuneeButton
              //onPress={navigateBack}
              onPress={navigateNext}
              variant="transparent"
            >
              Didn't receive email?
            </JuneeButton>

          </FooterView>
        </FullPageView>
      </Background>
    </KeyboardAwareScrollView>
  )
}
