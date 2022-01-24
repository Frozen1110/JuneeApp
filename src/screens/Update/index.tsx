import { createStackNavigator } from 'react-navigation-stack';
import Update from './Update';

export const UpdateNavigator = createStackNavigator(
  {
    Update: {
      screen: Update,
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
      screen: UpdateNavigator,
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
