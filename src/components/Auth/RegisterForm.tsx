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
  employerId: number,
  navigateBack: () => void,
  navigateToLogin: () => void,
  navigateToNext: () => void,
}

export default function RegisterScreen({
  employerId,
  navigateBack,
  navigateToLogin,
  navigateToNext,
}: Props) {
  const { register } = useAuth();

  const [firstName, setFirstName] = useState({ value: '', error: '' })
  const [lastName, setLastName] = useState({ value: '', error: '' })

  const onNext = async () => {
    if(firstName.value.length === 0) 
      setFirstName({ ...firstName, error: "Fill this field" });
    if(lastName.value.length === 0) 
      setLastName({ ...lastName, error: "Fill this field" });
    if(firstName.value.length > 0 && lastName.value.length > 0)
      navigateToNext();
    /*
    const firstNameError = nameValidator(firstName.value)
    const lastNameError = nameValidator(lastName.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || firstNameError || lastNameError) {
      setFirstName({ ...firstName, error: firstNameError })
      setLastName({ ...lastName, error: lastNameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    try {
      await register(employerId, firstName.value, lastName.value, email.value, password.value);
      onRegisterSuccess();
    } catch (err) {
      console.log(err);
      setEmail({ ...email, error: 'There was an error registering you' })
    }
    */
  }

  return (
    <KeyboardAwareScrollView>
      <Background>
        <HeaderView>
          <Logo />
        </HeaderView>
        <FullPageView>
          <HeroView>
            <JuneeText variant="legend">Welcome!</JuneeText>
            <ProgressDots steps={4} activeStep={3} />
            <TextInput
              description=""
              placeholder="First name"
              returnKeyType="next"
              value={firstName.value}
              onChangeText={(text: string) => setFirstName({ value: text, error: "" })}
              error={firstName.error.length > 0}
              errorText={firstName.error}
              autoCapitalize="none"
              autoCompleteType="name"
            />
            <TextInput
              description=""
              placeholder="Last name"
              returnKeyType="next"
              value={lastName.value}
              onChangeText={(text: string) => setLastName({ value: text, error: "" })}
              error={lastName.error.length > 0}
              errorText={lastName.error}
              autoCapitalize="none"
              autoCompleteType="name"
            />
            <JuneeButton onPress={onNext}>Continue</JuneeButton>
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
