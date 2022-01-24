import React from 'react';
import Background from '@junee/components/Background'
import Logo from '@junee/components/Logo'
import Header from '@junee/components/Header'


type Props = {
  navigation: any
}

const Update = ({
  navigation
}: Props) => {
  return (
    <Background>
      <Logo />
      <Header>Please update your app</Header>
    </Background>
  );
}

export default Update;
