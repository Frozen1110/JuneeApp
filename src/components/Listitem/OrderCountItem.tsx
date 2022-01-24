import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "@junee/theme";
import JuneeText from "../Typography";

type Props = {
  title: string;
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  isMain?: boolean;
  style: any;
};

export default function OrderCountItem({ title, count, onIncrease, onDecrease, isMain = false, style = {} }: Props) {
  let canIncrease = true;
  let canDecrease = count > 0;
  let countColor = count > 0 ? theme.colors.secondary : theme.colors.text.darkGray;
  let minusButtonColor = canDecrease ? theme.colors.third : theme.colors.gray;
  let minusButtonTxtColor = canDecrease ? theme.colors.secondary : theme.colors.text.darkGray;
  let plusButtonColor = canIncrease ? theme.colors.third : theme.colors.gray;
  let plusButtonTxtColor = canIncrease ? theme.colors.secondary : theme.colors.text.darkGray;
  return (
    <View style={[styles.container, isMain && { height: 70 }, style]}>
      <JuneeText variant="description" style={{ color: theme.colors.primary, marginTop: 0, flex: 0.3, marginLeft: 25 }}>
        {title}
      </JuneeText>
      <JuneeText variant="legend" style={[{ color: theme.colors.secondary, marginTop: 0, flex: 0.2 }, { color: countColor }]}>
        {count}
      </JuneeText>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onDecrease}
        style={[styles.decreaseButton, { backgroundColor: minusButtonColor }]}
        disabled={!canDecrease}
      >
        <JuneeText variant="legend" style={[{ color: theme.colors.secondary, marginTop: 0 }, { color: minusButtonTxtColor }]}>
          -
        </JuneeText>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onIncrease}
        style={[styles.increaseButton, { backgroundColor: plusButtonColor }]}
        disabled={!canIncrease}
      >
        <JuneeText variant="legend" style={[{ color: theme.colors.secondary, marginTop: 0 }, { color: plusButtonTxtColor }]}>
          +
        </JuneeText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    height: 46
  },
  decreaseButton: {
    flex: 0.25,
    backgroundColor: theme.colors.third,
    marginRight: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  increaseButton: {
    flex: 0.25,
    backgroundColor: theme.colors.third,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    height: "100%"
  }
});
