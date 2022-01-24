import React from "react";
import { ImageBackground, StyleSheet, KeyboardAvoidingView, View, Dimensions, StatusBar } from "react-native";
import { theme } from "@junee/theme";
const defaultBackground = require("../assets/background_dot.png");

export default function Background({ backgroundImage = null, children, statusBar = true, bottomTab = false, style = {} }) {
  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const containerHeight = bottomTab ? SCREEN_HEIGHT - theme.bottomTab.height : SCREEN_HEIGHT
  const statusBarComp = statusBar ? (
    <StatusBar
      backgroundColor={!style.backgroundColor ? theme.colors.primary : style.backgroundColor}
      barStyle="light-content"
      translucent={true}
    />
  ) : (
    <StatusBar hidden />
  );
  if (backgroundImage) {
    return (
      <ImageBackground source={backgroundImage || defaultBackground} resizeMode="cover" style={[styles.background, style]}>
        {statusBarComp}
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {children}
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }

  return (
    <View style={[styles.background, { minHeight: containerHeight }, style]}>
      {statusBarComp}
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.primary
  },
  container: {
    flex: 1,
    width: "100%"
    //maxWidth: 340,
    //alignSelf: 'center',
    //alignItems: 'center',
    //justifyContent: 'center',
  }
});
