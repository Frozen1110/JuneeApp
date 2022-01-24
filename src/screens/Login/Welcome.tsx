import React from 'react';
import { AuthProvider } from '@junee/contexts/AuthContext'
import WelcomeForm from '@junee/components/Auth/WelcomeForm';

type Props = {
  navigation: any
}

const RegisterScreen = ({
  navigation
}: Props) => {

  return (
    <AuthProvider>
      <WelcomeForm
        onLoginPressed={() => navigation.replace('Login')}
        onRegisterPressed={() => navigation.replace('Login', {alreadyMember: true})}
      />
    </AuthProvider>
  );
};

export default RegisterScreen;
