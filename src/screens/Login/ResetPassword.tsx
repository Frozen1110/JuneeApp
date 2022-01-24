import React from 'react';
import ResetPasswordForm from "@junee/components/Auth/ResetPasswordForm";
import { AuthProvider } from '@junee/contexts/AuthContext'

type Props = {
  navigation: any
}

const ResetPasswordScreen = ({
  navigation
}: Props) => {

  return (
    <AuthProvider>
      <ResetPasswordForm
        navigateBack={() => navigation.goBack()}
      />
    </AuthProvider>
  );
};

export default ResetPasswordScreen;
