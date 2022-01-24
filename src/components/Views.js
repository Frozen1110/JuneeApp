import React from "react";
import { View, StyleSheet } from "react-native";

export const FullPageView = ({ children }) => {
  return <View style={{ flex: 1, width: "100%", paddingHorizontal: 20 }}>{children}</View>;
};

export const HeroView = ({ children }) => {
  return <View style={{ flex: 1, justifyContent: "center", flexDirection: "column", width: "100%" }}>{children}</View>;
};

export const NormalView = ({ children, style = {} }) => {
  return <View style={[{ flex: 1, flexDirection: "column", width: "100%" }, style]}>{children}</View>;
};

export const HeaderView = ({ children }) => {
  return <View style={{ paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20 }}>{children}</View>;
};
export const FooterView = ({ children }) => {
  return <View style={{ marginTop: 'auto', marginBottom: 36 }}>{children}</View>;
};
export const Card = ({ children, style = {} }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingBottom: 20,
    marginBottom: 40
  }
});
