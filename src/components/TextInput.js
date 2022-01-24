import React, { useState } from "react";
import { View, StyleSheet, TextInput as Input, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "@junee/theme";

export default function TextInput({ ...props }) {
  let defaultColor = props.defaultColor ? props.defaultColor : theme.colors.inputBackground;
  let focusColor = props.focusColor ? props.focusColor : theme.colors.white;
  const [backgroundColor, setBackGroundColor] = useState(defaultColor);
  const onBlur = () => {
    setBackGroundColor(defaultColor);
  };
  const onFocus = () => {
    setBackGroundColor(focusColor);
  };
  return (
    <View style={[styles.container, { backgroundColor }, props.error && { backgroundColor: theme.colors.buttons.error }]}>
      <Input
        style={styles.input}
        underlineColor="transparent"
        underlineColorAndroid="transparent"
        onBlur={onBlur}
        onFocus={onFocus}
        {...props}
      />
      {props.error && (
        <View style={styles.right}>
          <Text style={styles.errorTxt}>{props.errorText}</Text>
          <Icon name="info" size={18} color={theme.colors.error} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: theme.colors.primary,
    fontSize: 18,
    height: 50,
    flex: 1
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 25,
    marginTop: theme.spacing.standard
  },
  right: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  errorTxt: {
    fontSize: 14,
    lineHeight: 18,
    color: theme.colors.error,
    marginRight: 4
  }
});
