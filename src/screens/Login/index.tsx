import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import AwaitMagicLink from './AwaitMagicLink';
import Welcome from './Welcome';
import Register from './Register';
import Workplace from './Workplace';
import ResetPassword from './ResetPassword';

export const LoginNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    AwaitMagicLink: {
      screen: AwaitMagicLink,
      navigationOptions: {
        headerShown: false,
      }
    },
    Workplace: {
      screen: Workplace,
      navigationOptions: {
        headerShown: false,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerShown: false,
      },
    },
    ResetPassword: {
      screen: ResetPassword,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'screen',
  },
);

const coreFlow = createStackNavigator(
  {
    LoginRoot: {
      screen: LoginNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

export default coreFlow;
