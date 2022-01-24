import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "@junee/components/Views";
import JuneeButton from "@junee/components/Button";
import { theme } from "@junee/theme";
import { Question_svg } from "@junee/assets/icons";
import JuneeText from "../Typography";

type Props = {
  title: string;
  description: string;
  buttonTxt?: string;
  buttonStyle?: any;
  onClick?: () => void;
  children?: any;
};

export default function NormalCard({ title, description, buttonTxt = "", buttonStyle = {}, onClick, children = <></> }: Props) {
  const onClickHelp = () => {};
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <JuneeText variant="heading" style={{ color: theme.colors.primary, marginTop: 0 }}>
          {title}
        </JuneeText>
        <TouchableOpacity activeOpacity={0.6} onPress={onClickHelp}>
          <Question_svg width={18} height={18} style={{ color: theme.colors.secondary }} />
        </TouchableOpacity>
      </View>
      {description.length > 0 && (
        <JuneeText variant="description" style={{ marginTop: 8 }}>
          {description}
        </JuneeText>
      )}
      {children}
      {buttonTxt.length > 0 && (
        <JuneeButton variant={"third"} onPress={onClick} style={buttonStyle}>
          {buttonTxt}
        </JuneeButton>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 18,
    paddingTop: 18,
    marginTop: 20
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
