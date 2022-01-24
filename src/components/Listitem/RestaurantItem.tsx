import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "@junee/theme";
import JuneeText from "../Typography";

type Props = {
  data: any;
  onClick: () => void;
};

export default function RestaurantItem({ data, onClick }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onClick}>
      <View style={styles.container}>
        <JuneeText variant="description" style={{ marginTop: 0, color: theme.colors.secondary }}>
          {data.name}
        </JuneeText>
        <JuneeText variant="inline" style={{ marginTop: 0, color: theme.colors.text.darkGray }}>
          {data.location}
        </JuneeText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: theme.colors.gray,
    marginHorizontal: 6,
    paddingLeft: 14,
    paddingRight: 26,
    paddingVertical: 16
  }
});
