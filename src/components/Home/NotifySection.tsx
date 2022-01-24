import React from "react";
import { View, StyleSheet } from "react-native";
import JuneeText from "../Typography";
import { theme } from "@junee/theme";
import JuneeButton from "../Button";
import { Good_svg } from "@junee/assets/icons";

type Props = {
  title: string;
  description: string;
  onRateUp: () => void;
  onFeedback: () => void;
};

export default function NotifySection({ title, description, onRateUp, onFeedback }: Props) {
  return (
    <View style={styles.container}>
      <JuneeText variant="legend" style={{ marginTop: 0, color: theme.colors.white }}>
        {title}
      </JuneeText>
      <JuneeText variant="description" style={{ color: theme.colors.inputBackground }}>
        {description}
      </JuneeText>
      <View style={styles.row}>
        <JuneeButton
          variant="small2"
          onPress={onRateUp}
          icon={<Good_svg width={14} height={14} style={{ color: theme.colors.primary, marginRight: 7 }} />}
        >
          Great
        </JuneeButton>
        <JuneeButton variant="small2" onPress={onFeedback} style={{ marginLeft: 8 }}>
          Needs improvement
        </JuneeButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    padding: 18
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  }
});
