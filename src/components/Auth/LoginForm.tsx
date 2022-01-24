import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Background from "@junee/components/Background";
import Logo from "@junee/components/Logo";
import JuneeButton from "@junee/components/Button";
import TextInput from "@junee/components/TextInput";
import { theme } from "@junee/theme";
import { emailValidator } from "@junee/helpers/emailValidator";
import { passwordValidator } from "@junee/helpers/passwordValidator";
import useAuth from "@junee/hooks/useAuth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FooterView, FullPageView, HeaderView, HeroView } from "../Views";
import JuneeText from "../Typography";
import ProgressDots from "../ProgressDots";

type Props = {
  navigateBack: () => void;
  navigateNext: () => void;
  noemail: boolean;
  alreadyMember: boolean;
};

export default function LoginForm({ navigateBack, navigateNext, noemail, alreadyMember }: Props) {
  const { sendMagicLink } = useAuth();

  const [email, setEmail] = useState({ value: "", error: "" });

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    try {
      //await sendMagicLink(email.value);
      navigateNext();
    } catch (err) {
      setEmail({ ...email, error: "Username or password is incorrect" });
    }
  };

  let headerTxt = "";
  if(noemail) headerTxt = "Didn't receive email?";
  else if(alreadyMember) headerTxt = "Welcome back!";
  else headerTxt = "Join through your workplace";

  let description = "";
  if(alreadyMember) description = "There’s no need for passwords. If you forgot your email address, check with your employer.";
  else description = "We respect your privary. By continuing, you agree with our Privacy Policy and Terms & Conditions";

  return (
    <KeyboardAwareScrollView>
      <Background>
        <HeaderView>
          <Logo />
        </HeaderView>
        <FullPageView>
          <HeroView>
            <JuneeText variant="legend">{headerTxt}</JuneeText>
            <ProgressDots steps={alreadyMember ? 2 : 4} activeStep={1} />
            {noemail && (
              <JuneeText variant="description">Check your spam folder and email below, change and resend if needed.</JuneeText>
            )}
            <TextInput
              description=""
              placeholder="Email"
              returnKeyType="next"
              value={email.value}
              onChangeText={(text: string) => setEmail({ value: text, error: "" })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <JuneeButton onPress={onLoginPressed}>Email me a login link</JuneeButton>
            <JuneeText variant="footerLight">
              {description}
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
  );
}
