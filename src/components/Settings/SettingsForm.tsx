import React from 'react'
import Background from '@junee/components/Background'
import Logo from '@junee/components/Logo'
import Header from '@junee/components/Header'
import JuneeButton from '@junee/components/Button'
import useAuth from '@junee/hooks/useAuth'

type Props = {
  onLogoutSuccess: () => void,
}

export default function SettingsForm({
  onLogoutSuccess,
}: Props) {
  const { logout } = useAuth();

  const onLogoutPressed = async () => {
    console.log("Logout Pressed")
    try {
      await logout();
      console.log("Succeeeded")
      onLogoutSuccess();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Background>
      <Logo />
      <Header>Settings</Header>
      <JuneeButton
        mode="contained"
        onPress={onLogoutPressed}
        style={{ marginTop: 24 }}
      >
        Log Out
      </JuneeButton>
    </Background>
  )
}