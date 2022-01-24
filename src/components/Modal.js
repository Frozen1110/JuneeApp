import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { theme } from "@junee/theme";

export default function JuneeModal({ visible, variant = "primary", onClose, children }) {
  const modalStyle = modalVariants[variant];

  return (
    <Modal
      animationInTiming={400}
      animationOutTiming={300}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={300}
      style={{ justifyContent: "center" }}
      isVisible={visible}
      useNativeDriverForBackdrop
      statusBarTranslucent
      backdropColor={theme.colors.primary}
      backdropOpacity={0.9}
      onBackdropPress={onClose}
    >
      <View style={modalStyle.container}>{children}</View>
    </Modal>
  );
}

const contained = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 16
  }
});

const primary = StyleSheet.create({
  container: {...contained.container}
});

const modalVariants = {
  primary
};
