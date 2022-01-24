import { createStackNavigator } from 'react-navigation-stack';
import Splash from './Splash';

export const SplashNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
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

const splashFlow = createStackNavigator(
  {
    AppRoot: {
      screen: SplashNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

export default splashFlow;
