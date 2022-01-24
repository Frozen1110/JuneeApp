import React from 'react';
import AwaitMagicLinkForm from "@junee/components/Auth/AwaitMagicLinkForm";
import { AuthProvider } from '@junee/contexts/AuthContext'

type Props = {
  navigation: any
}

const LoginScreen = ({
  navigation
}: Props) => {
  const { alreadyMember } = navigation.state.params;
  return (
    <AuthProvider>
      <AwaitMagicLinkForm
        navigateBack={() => navigation.replace('Login', {noEmail: true})}
        navigateNext={() => navigation.replace('Register', {employerId: 1})}
        alreadyMember={alreadyMember}
      />
    </AuthProvider>
  );
};

export default LoginScreen;
