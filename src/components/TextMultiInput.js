import React from "react";
import { View, StyleSheet, TextInput as Input } from "react-native";
import { theme } from "@junee/theme";

export default function TextMultiInput({ ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        underlineColor="transparent"
        underlineColorAndroid="transparent"
        multiline={true}
        textAlignVertical="top"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: theme.colors.primary,
    fontSize: 18,
    lineHeight: 21,
    height: 300,
    flex: 1,
    alignItems: "flex-start"
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    borderRadius: 25,
    padding: 15,
    marginTop: theme.spacing.standard,
    backgroundColor: theme.colors.input.secondary
  }
});
