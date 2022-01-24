import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Background from "@junee/components/Background";
import Logo from "@junee/components/Logo";
import AchivementsSection from "../Home/AchivementsSection";
import { HeaderView, NormalView } from "@junee/components/Views";
import { theme } from "@junee/theme";
import { Scan_svg, Location_svg } from "@junee/assets/icons";
import JuneeText from "../Typography";
import JuneeButton from "../Button";
import TextInput from "@junee/components/TextInput";
import { emailValidator } from "@junee/helpers/emailValidator";

type Props = {
  onBorrowBowlPressed: () => void;
};

export default function ProfileForm({ onBorrowBowlPressed }: Props) {
  const [firstName, setFirstName] = useState({ value: "Rex", error: "" });
  const [lastName, setLastName] = useState({ value: "Chen", error: "" });
  const [email, setEmail] = useState({ value: "rex@junee.co", error: "" });
  const [workplace, setWorkplace] = useState({ value: "HKTSHORE", error: "" });
  const onChangeFirstName = (value: string) => {
    if (value.length > 0) setFirstName({ value, error: "" });
    else setFirstName({ value, error: "Fill this field" });
  };
  const onChangeLastName = (value: string) => {
    if (value.length > 0) setLastName({ value, error: "" });
    else setLastName({ value, error: "Fill this field" });
  };
  const onChangeEmail = (value: string) => {
    let error = emailValidator(value);
    if (error.length > 0) setEmail({ value, error });
    else setEmail({ value, error: "" });
  };
  const onChangeWorkplace = (value: string) => {
    if (value.length > 0) setWorkplace({ value, error: "" });
    else setWorkplace({ value, error: "Fill this field" });
  };
  const onViewOffer = () => {};
  return (
    <KeyboardAwareScrollView>
      <Background style={{ backgroundColor: theme.colors.primary }} bottomTab={true}>
        <HeaderView>
          <View style={styles.row}>
            <Logo />
            <TouchableOpacity activeOpacity={0.6} onPress={onBorrowBowlPressed}>
              <Scan_svg width={27} height={27} style={{ color: theme.colors.white }} />
            </TouchableOpacity>
          </View>
        </HeaderView>
        <NormalView>
          <View style={styles.descriptionRow}>
            <JuneeText variant="description" style={{ marginTop: 0, color: theme.colors.white, flex: 1 }}>
              20% off mains at HOP Vietam
            </JuneeText>
            <JuneeButton variant="small" onPress={onViewOffer} style={{ marginTop: 0, marginLeft: 10 }}>
              View Offer
            </JuneeButton>
          </View>
          <View style={styles.welcomeRow}>
            <JuneeText variant="heading" style={{ marginTop: 0, color: theme.colors.black }}>
              Welcome Rex
            </JuneeText>
            <View style={[styles.row, { marginTop: 8 }]}>
              <Location_svg width={16} height={18} style={{ color: theme.colors.text.darkGray }} />
              <JuneeText variant="description" style={{ marginLeft: 8, marginTop: 0, color: theme.colors.text.darkGray, flex: 1 }}>
                Huckletree Shoreditch
              </JuneeText>
            </View>
          </View>
          <AchivementsSection teamSaved={148} singleSaved={14} />
          <View style={styles.informationForm}>
            <JuneeText variant="description" style={{ marginTop: 0, color: theme.colors.black }}>
              Manage your information
            </JuneeText>

            <TextInput
              description=""
              placeholder="First name"
              returnKeyType="next"
              value={firstName.value}
              onChangeText={onChangeFirstName}
              error={firstName.error.length > 0}
              errorText={firstName.error}
              autoCapitalize="none"
              autoCompleteType="name"
              defaultColor={theme.colors.input.secondary}
            />
            <TextInput
              description=""
              placeholder="Last name"
              returnKeyType="next"
              value={lastName.value}
              onChangeText={onChangeLastName}
              error={lastName.error.length > 0}
              errorText={lastName.error}
              autoCapitalize="none"
              autoCompleteType="name"
              defaultColor={theme.colors.input.secondary}
            />
            <TextInput
              description=""
              placeholder="Email"
              returnKeyType="next"
              value={email.value}
              onChangeText={onChangeEmail}
              error={email.error.length > 0}
              errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              defaultColor={theme.colors.input.secondary}
            />
            <JuneeText variant="description" style={{ marginTop: 30, color: theme.colors.black }}>
              Your workplace code
            </JuneeText>
            <TextInput
              description=""
              placeholder="Workplace"
              returnKeyType="next"
              value={workplace.value}
              onChangeText={onChangeWorkplace}
              error={workplace.error.length > 0}
              errorText={workplace.error}
              autoCapitalize="none"
              autoCompleteType="name"
              defaultColor={theme.colors.input.secondary}
            />
          </View>
        </NormalView>
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
  descriptionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 13,
    backgroundColor: theme.colors.secondary
  },
  welcomeRow: {
    backgroundColor: theme.colors.white,
    padding: 16
  },
  informationForm: {
    backgroundColor: theme.colors.third,
    padding: 16
  }
});
