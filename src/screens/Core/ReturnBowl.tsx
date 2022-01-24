import React from "react";
import { ReturnBowlAboutForm } from "@junee/components/ReturnBowl";

type Props = {
  navigation: any;
};

export default function ReturnBowl({ navigation }: Props) {
  return (
    <ReturnBowlAboutForm
      onCancelReturn={() => navigation.navigate("Main")}
      onNext={() => navigation.navigate("ReturnBowlStep1", {returned: false})}
    />
  );
}
