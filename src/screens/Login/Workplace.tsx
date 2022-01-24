import React from 'react';
import { AuthProvider } from '@junee/contexts/AuthContext'
import WorkplaceForm from '@junee/components/Auth/WorkplaceForm';

type Props = {
  navigation: any
}

const RegisterScreen = ({
  navigation
}: Props) => {

  return (
    <AuthProvider>
      <WorkplaceForm
        navigateBack={() => navigation.goBack()}
        navigateToLogin={() => navigation.replace('Login')}
        onContinue={(employerId: number) => { navigation.navigate('Home', { employerId }) }}
      />
    </AuthProvider>
  );
};

export default RegisterScreen;
