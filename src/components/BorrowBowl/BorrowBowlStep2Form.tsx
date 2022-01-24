import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Background from "@junee/components/Background";
import Logo from "@junee/components/Logo";
import { HeaderView, FullPageView, FooterView, NormalView } from "@junee/components/Views";
import ProgressDots from "../ProgressDots";
import { theme } from "@junee/theme";
import { Close_svg } from "@junee/assets/icons";
import JuneeText from "../Typography";
import NormalCard from "../Card/NormalCard";

type Props = {
  onCancelBorrow: () => void;
  onBack: () => void;
  onNext: () => void;
};

export default function BorrowBowlStep2Form({ onCancelBorrow, onNext, onBack }: Props) {
  return (
    <KeyboardAwareScrollView>
      <Background style={{ backgroundColor: theme.colors.secondary }}>
        <HeaderView>
          <View style={styles.row}>
            <Logo type={2} />
            <TouchableOpacity activeOpacity={0.6} onPress={onCancelBorrow}>
              <Close_svg width={18} height={18} style={{ color: theme.colors.white }} />
            </TouchableOpacity>
          </View>
        </HeaderView>
        <FullPageView>
          <NormalView>
            <JuneeText variant="legend">Borrow bowls</JuneeText>
            <ProgressDots steps={3} activeStep={2} />
            <NormalCard
              title="Congrats!"
              description="Show this screen to the staff to get your food in junee bowls"
              buttonTxt="I’ve shown this to staff"
              onClick={onNext}
            >
              <Image
                source={require("@junee/assets/images/confirm_borrow.png")}
                style={{ width: 275, height: 207, alignSelf: "center" }}
                resizeMode="cover"
              />
            </NormalCard>
          </NormalView>
          <FooterView>
            <TouchableOpacity activeOpacity={0.6} onPress={onBack}>
              <JuneeText variant="description" style={{ marginTop: 0, color: theme.colors.white }}>
                Go Back
              </JuneeText>
            </TouchableOpacity>
          </FooterView>
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
  },
  code: {
    width: 172,
    height: 46,
    borderRadius: 25,
    backgroundColor: theme.colors.third,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: -50
  }
});
