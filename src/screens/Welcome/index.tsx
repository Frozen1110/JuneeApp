import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { WelcomeScreen } from "./welcomeScreen";
import { BuildScreen } from "./buildScreen";
import { TestScreen } from "./testScreen";
import { DistributeScreen } from "./distributeScreen";
import { CrashesScreen } from "./crashesScreen";
import { AnalyticsScreen } from "./analyticsScreen";
import { CodePushScreen } from "./codePushScreen";
import "react-native-gesture-handler";

const BuildStack = createStackNavigator({ screen: BuildScreen });
const TestStack = createStackNavigator({ screen: TestScreen });
const CodePushStack = createStackNavigator({ screen: CodePushScreen });
const DistributeStack = createStackNavigator({ screen: DistributeScreen });
const CrashesStack = createStackNavigator({ screen: CrashesScreen });
const AnalyticsStack = createStackNavigator({ screen: AnalyticsScreen });
const RootStack = createMaterialTopTabNavigator(
  {
    Welcome: WelcomeScreen,
    Build: BuildStack,
    Test: TestStack,
    CodePush: CodePushStack,
    Distribute: DistributeStack,
    Crashes: CrashesStack,
    Analytics: AnalyticsStack,
  },
  {
    initialRouteName: "Welcome",
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#252525"
      }
    },
    navigationOptions: {
      tabBarVisible: false
    },
    lazy: false,
    swipeEnabled: true
  }
);
const AppContainer = createAppContainer(RootStack);

export default AppContainer;
