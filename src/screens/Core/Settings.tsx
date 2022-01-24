import React from "react";
import ProfileForm from "@junee/components/Profile/ProfileForm";

type Props = {
  navigation: any;
};

export default function Settings({ navigation }: Props) {
  return <ProfileForm onBorrowBowlPressed={() => navigation.navigate("BorrowBowl")} />;
}
