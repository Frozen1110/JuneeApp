import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Easing, Animated } from 'react-native';

import Splash from './screens/Splash';
import Update from './screens/Update';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Core from './screens/Core';

export const transitionConfig = {
  transitionSpec: {
    duration: 250,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
  screenInterpolator: (sceneProps: any) => {
    const { layout, position, scene } = sceneProps;

    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    });

    return { transform: [{ translateX }] };
  },
};

const Stack = createStackNavigator(
  {
    SplashScreen: {
      screen: Splash,
    },
    UpdateStack: {
      screen: Update,
    },
    LoginStack: {
      screen: Login,
      path: 'login',
    },
    WelcomeStack: {
      screen: Welcome,
    },
    CoreStack: {
      screen: Core,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'SplashScreen',
    ...transitionConfig,
  },
);

// export default HomeScreen;
export default createAppContainer(Stack);
