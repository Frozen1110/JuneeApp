import React from 'react';
import LoginForm from "@junee/components/Auth/LoginForm";
import { AuthProvider } from '@junee/contexts/AuthContext'

type Props = {
  navigation: any
}

const LoginScreen = ({
  navigation
}: Props) => {
  return (
    <AuthProvider>
      <LoginForm
        navigateBack={() => navigation.replace('Welcome')}
        navigateNext={() => navigation.replace('AwaitMagicLink', {alreadyMember: navigation.getParam('alreadyMember')})}
        noemail={navigation.getParam('noEmail')}
        alreadyMember={navigation.getParam('alreadyMember')}
      />
    </AuthProvider>
  );
};

export default LoginScreen;
