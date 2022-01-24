import React from "react";
import { ReturnBowlStep1Form } from "@junee/components/ReturnBowl";

type Props = {
  navigation: any;
};

export default function ReturnBowlStep1({ navigation }: Props) {
  const { returned } = navigation.state.params;
  return (
    <ReturnBowlStep1Form
      onCancelReturn={() => navigation.navigate("Main")}
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate("ReturnBowlStep2")}
      returned={returned}
    />
  );
}
