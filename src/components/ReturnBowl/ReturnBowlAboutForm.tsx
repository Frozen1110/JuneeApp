import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Background from "@junee/components/Background";
import Logo from "@junee/components/Logo";
import { HeaderView, FullPageView, NormalView } from "@junee/components/Views";
import { theme } from "@junee/theme";
import { Close_svg } from "@junee/assets/icons";
import JuneeText from "../Typography";
import JuneeButton from "../Button";
import SelectableList from "../Card/SelectableList";
import { RETURN_ROLE_TXTS } from "@junee/theme/const";

type Props = {
  onCancelReturn: () => void;
  onNext: () => void;
};

export default function ReturnBowlAboutForm({ onCancelReturn, onNext }: Props) {
  return (
    <KeyboardAwareScrollView>
      <Background style={{ backgroundColor: theme.colors.primary }}>
        <HeaderView>
          <View style={styles.row}>
            <Logo />
            <TouchableOpacity activeOpacity={0.6} onPress={onCancelReturn}>
              <Close_svg width={18} height={18} style={{ color: theme.colors.white }} />
            </TouchableOpacity>
          </View>
        </HeaderView>
        <FullPageView>
          <NormalView>
            <JuneeText variant="legend">How to return</JuneeText>
            <JuneeButton variant="small3" onPress={onNext}>
              Find a return point
            </JuneeButton>
            <SelectableList
              data={RETURN_ROLE_TXTS}
              buttonTxt={"Scan code to finish"}
              buttonType="primary"
              onClick={onNext}
              style={{ marginTop: 20 }}
            />
            <JuneeText variant="footerLight">This step will be skipped once you returned twice.</JuneeText>
          </NormalView>
        </FullPageView>
      </Background>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
