import React from "react";
import { ReturnBowlStep2Form } from "@junee/components/ReturnBowl";

type Props = {
  navigation: any;
};

export default function ReturnBowlStep2({ navigation }: Props) {
  return (
    <ReturnBowlStep2Form
      onCancelReturn={() => navigation.navigate("Main")}
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate("Main")}
    />
  );
}
