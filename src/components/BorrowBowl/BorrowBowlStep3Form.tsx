import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Background from "@junee/components/Background";
import Logo from "@junee/components/Logo";
import { HeaderView, FullPageView, FooterView, NormalView } from "@junee/components/Views";
import ProgressDots from "../ProgressDots";
import { theme } from "@junee/theme";
import { Close_svg } from "@junee/assets/icons";
import JuneeText from "../Typography";
import NormalCard from "../Card/NormalCard";
import OrderCountItem from "../Listitem/OrderCountItem";
import orders from "@junee/data/order.json";

type Props = {
  onCancelBorrow: () => void;
  onNext: () => void;
  onBack: () => void;
};

export default function BorrowBowlStep3Form({ onCancelBorrow, onNext, onBack }: Props) {
  const [orderCounts, setOrderCounts] = useState<Array<number>>(new Array(orders.length).fill(0));
  const onIncrease = (index: number) => {
    let tmpCounts = [...orderCounts];
    tmpCounts[index] += 1;
    setOrderCounts(tmpCounts);
  };

  const onDecrease = (index: number) => {
    let tmpCounts = [...orderCounts];
    if (tmpCounts[index] > 0) tmpCounts[index] -= 1;
    setOrderCounts(tmpCounts);
  };
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
            <ProgressDots steps={3} activeStep={3} />
            <NormalCard
              title="While you wait"
              description="What did you order? So we know what bowls you borrowed"
              buttonTxt="All done"
              onClick={onNext}
            >
              {orders.map((item: string, index: number) => {
                return (
                  <OrderCountItem
                    key={index}
                    title={item}
                    count={orderCounts[index]}
                    onIncrease={() => onIncrease(index)}
                    onDecrease={() => onDecrease(index)}
                    isMain={index === 0}
                    style={[{ marginTop: 15 }, (index === 0 || index === orders.length - 1) && { marginBottom: 22 }]}
                  />
                );
              })}
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
