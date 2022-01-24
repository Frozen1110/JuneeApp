import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "@junee/theme";

export default function JuneeTooltip({ style = {}, variant = "primary", title, description }) {
  const tooltipStyle = tooltipVariants[variant];

  return (
    <View style={[tooltipStyle.tooltip, style]}>
      <Text style={tooltipStyle.header}>{title}</Text>
      <Text style={tooltipStyle.text}>{description}</Text>
      <View style={tooltipStyle.triangle} />
    </View>
  );
}

const contained = StyleSheet.create({
  tooltip: {
    width: 330,
    minHeight: 120,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 15,
    marginTop: 8
  },
  text: {
    fontSize: 18,
    lineHeight: 21
  },
  triangle: {
    position: "absolute",
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 16,
    borderBottomWidth: 8,
    borderLeftWidth: 16,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    top: -8,
    right: 38
  }
});

const primary = StyleSheet.create({
  tooltip: {
    ...contained.tooltip,
    backgroundColor: theme.colors.primary
  },
  header: {
    ...contained.text,
    color: theme.colors.secondary
  },
  text: {
    ...contained.text,
    color: theme.colors.white,
    marginTop: 7
  },
  triangle: {
    ...contained.triangle,
    borderBottomColor: theme.colors.primary
  }
});

const secondary = StyleSheet.create({
  tooltip: {
    ...contained.tooltip,
    backgroundColor: theme.colors.secondary
  },
  header: {
    ...contained.text,
    color: theme.colors.primary
  },
  text: {
    ...contained.text,
    color: theme.colors.white,
    marginTop: 7
  },
  triangle: {
    ...contained.triangle,
    borderBottomColor: theme.colors.secondary
  }
});

const tooltipVariants = {
  primary,
  secondary
};
