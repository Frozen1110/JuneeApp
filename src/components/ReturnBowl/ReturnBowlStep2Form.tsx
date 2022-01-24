import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import Background from "@junee/components/Background";
import Logo from "@junee/components/Logo";
import { HeaderView, FullPageView, NormalView, FooterView } from "@junee/components/Views";
import ProgressDots from "../ProgressDots";
import { theme } from "@junee/theme";
import { Close_svg } from "@junee/assets/icons";
import JuneeText from "../Typography";
import NormalCard from "../Card/NormalCard";

type Props = {
  onCancelReturn: () => void;
  onBack: () => void;
  onNext: () => void;
};

export default function ReturnBowlStep1Form({ onCancelReturn, onNext, onBack }: Props) {
  return (
    <ScrollView>
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
            <JuneeText variant="legend">Return bowls</JuneeText>
            <ProgressDots steps={2} activeStep={2} />
            <View>
              <NormalCard
                title="Hooray!"
                description="You’ve enjoyed another meal with no plastic waste!"
                buttonTxt="All done"
                buttonStyle={{ backgroundColor: theme.colors.secondary, marginTop: -30 }}
                onClick={onNext}
              >
                <Image
                  source={require("@junee/assets/images/confirm_return.png")}
                  style={{ width: 278, height: 278, alignSelf: "center", marginTop: 0 }}
                  resizeMode="cover"
                />
              </NormalCard>
            </View>
          </NormalView>
          <FooterView>
            <TouchableOpacity activeOpacity={0.6} onPress={onBack}>
              <JuneeText variant="description" style={{ marginTop: 0, color: theme.colors.white }}>
                Go back
              </JuneeText>
            </TouchableOpacity>
          </FooterView>
        </FullPageView>
      </Background>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
