import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Background from "@junee/components/Background";
import Logo from "@junee/components/Logo";
import JuneeButton from "@junee/components/Button";
import TextInput from "@junee/components/TextInput";
import { theme } from "@junee/theme";
import useAuth from "@junee/hooks/useAuth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FooterView, FullPageView, HeaderView, HeroView } from "../Views";
import JuneeText from "../Typography";
import ProgressDots from "../ProgressDots";

type Props = {
  navigateBack: () => void,
  navigateToLogin: () => void,
  onContinue: (employerId: number) => void,
}

export default function WorkplaceForm({
  navigateBack,
  navigateToLogin,
  onContinue,
}: Props) {
  const { checkWorkplace } = useAuth();

  const [workplace, setWorkplace] = useState({ value: '', error: '' })

  const onSignUpPressed = async () => {
    try {
      //const employerId = await checkWorkplace(workplace.value);
      //onContinue(employerId);
      onContinue(1);
    } catch (err) {
      console.log(err);
      setWorkplace({ ...workplace, error: 'Workplace code does not exist' })
    }
  }

  const onNext = () => {
    if(workplace.value.length === 0) 
      setWorkplace({ ...workplace, error: "Fill this field" });
    else
      onSignUpPressed();
  }

  return (
    <KeyboardAwareScrollView>
      <Background>
        <HeaderView>
          <Logo />
        </HeaderView>
        <FullPageView>
          <HeroView>
            <JuneeText variant="legend">{"One last thing"}</JuneeText>
            <ProgressDots steps={4} activeStep={4} />
            <TextInput
              description=""
              placeholder="Workplace code"
              returnKeyType="next"
              value={workplace.value}
              onChangeText={(text: string) => setWorkplace({ value: text, error: "" })}
              error={workplace.error.length > 0}
              errorText={workplace.error}
              autoCapitalize="none"
              autoCompleteType="workplace"
            />
            <JuneeButton onPress={onNext}>Start my reusa-bowl journey</JuneeButton>
            <JuneeText variant="footerLight">
              You need the workplace code before starting to use junee. Your employer should have emailed this already.
            </JuneeText>
          </HeroView>
          <FooterView>
            <JuneeButton onPress={navigateBack} variant="transparent">
              Go back
            </JuneeButton>
          </FooterView>
        </FullPageView>
      </Background>
    </KeyboardAwareScrollView>
  )
}

