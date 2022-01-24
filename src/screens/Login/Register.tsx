import React from 'react';
import RegisterForm from "@junee/components/Auth/RegisterForm";
import { AuthProvider } from '@junee/contexts/AuthContext'

type Props = {
  navigation: any,
  route: any,
}

const RegisterScreen = ({
  navigation,
  route,
}: Props) => {
  const { employerId } = navigation.state.params;
  return (
    <AuthProvider>
      <RegisterForm
        employerId={parseInt(employerId)}
        navigateBack={() => navigation.goBack()}
        navigateToLogin={() => navigation.replace('Login')}
        navigateToNext={() => navigation.navigate('Workplace')}
      />
    </AuthProvider>
  );
};

export default RegisterScreen;
