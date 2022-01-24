import React, { useState } from 'react'
import Background from '@junee/components/Background'
import BackButton from '@junee/components/BackButton'
import Logo from '@junee/components/Logo'
import Header from '@junee/components/Header'
import TextInput from '@junee/components/TextInput'
import JuneeButton from '@junee/components/Button'
import { emailValidator } from '@junee/helpers/emailValidator'

type Props = {
  navigateBack: () => void,
}

export default function ResetPasswordScreen({
  navigateBack
}: Props) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
  }

  return (
    <Background>
      <BackButton goBack={navigateBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text: string) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <JuneeButton
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </JuneeButton>
    </Background>
  )
}
