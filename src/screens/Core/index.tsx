import React from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { theme } from "@junee/theme";
import Home from "./Home";
import BorrowBowl from "./BorrowBowl";
import BorrowBowlStep1 from "./BorrowBowlStep1";
import BorrowBowlStep2 from "./BorrowBowlStep2";
import BorrowBowlStep3 from "./BorrowBowlStep3";
import ReturnBowl from "./ReturnBowl";
import ReturnBowlStep1 from "./ReturnBowlStep1";
import ReturnBowlStep2 from "./ReturnBowlStep2";
import RestaurantsList from "./RestaurantsList";
import RestaurantsMap from "./RestaurantsMap";
import Settings from "./Settings";
import { Restaurant_svg, Discover_svg, Profile_svg } from "@junee/assets/icons";

const RestaurantNavigator = createStackNavigator(
  {
    RestaurantsList: {
      screen: RestaurantsList,
      navigationOptions: {
        headerShown: false
      }
    },
    RestaurantsMap: {
      screen: RestaurantsMap,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    initialRouteName: "RestaurantsList"
  }
);

const TabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? theme.colors.secondary : theme.colors.primary;
          return (
            <View style={styles.bottomMenu}>
              <Restaurant_svg width={24} height={24} style={{ color: iconFocused }} />
              <Text style={[styles.text, { color: iconFocused }]}>{"Home"}</Text>
            </View>
          );
        }
      }
    },
    Restaurants: {
      screen: RestaurantNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? theme.colors.secondary : theme.colors.primary;
          return (
            <View style={styles.bottomMenu}>
              <Discover_svg width={24} height={24} style={{ color: iconFocused }} />
              <Text style={[styles.text, { color: iconFocused }]}>{"Discover"}</Text>
            </View>
          );
        }
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? theme.colors.secondary : theme.colors.primary;
          return (
            <View style={styles.bottomMenu}>
              <Profile_svg width={24} height={24} fill={iconFocused} />
              <Text style={[styles.text, { color: iconFocused }]}>{"Profile"}</Text>
            </View>
          );
        }
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: theme.colors.secondary,
      inactiveTintColor: theme.colors.primary,
      labelStyle: {
        display: "none"
      },
      style: {
        height: theme.bottomTab.height,
        backgroundColor: theme.colors.white,
        borderTopWidth: 1,
        borderColor: theme.colors.black,
        paddingTop: 0,
        marginBottom: 0
      }
    }
  }
);

const coreFlow = createStackNavigator(
  {
    Main: {
      screen: TabNavigation,
      navigationOptions: {
        headerShown: false
      }
    },
    BorrowBowl: {
      screen: BorrowBowl,
      navigationOptions: {
        headerShown: false
      }
    },
    BorrowBowlStep1: {
      screen: BorrowBowlStep1,
      navigationOptions: {
        headerShown: false
      }
    },
    BorrowBowlStep2: {
      screen: BorrowBowlStep2,
      navigationOptions: {
        headerShown: false
      }
    },
    BorrowBowlStep3: {
      screen: BorrowBowlStep3,
      navigationOptions: {
        headerShown: false
      }
    },
    ReturnBowl: {
      screen: ReturnBowl,
      navigationOptions: {
        headerShown: false
      }
    },
    ReturnBowlStep1: {
      screen: ReturnBowlStep1,
      navigationOptions: {
        headerShown: false
      }
    },
    ReturnBowlStep2: {
      screen: ReturnBowlStep2,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    initialRouteName: "Main",
    headerMode: "none",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateX: translateX }] };
      }
    })
  }
);

const styles = StyleSheet.create({
  bottomMenu: {
    justifyContent: "center",
    alignItems: "center",
    margin: 13
  },
  text: {
    fontSize: 16,
    lineHeight: 26
  }
});

export default coreFlow;
