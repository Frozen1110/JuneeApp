import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { BarCodeReadEvent } from "react-native-camera";
import Background from "@junee/components/Background";
import Logo from "@junee/components/Logo";
import { HeaderView, FullPageView, FooterView, NormalView } from "@junee/components/Views";
import JuneeModal from "@junee/components/Modal";
import ProgressDots from "../ProgressDots";
import { theme } from "@junee/theme";
import { Close_svg, Exclamation_svg } from "@junee/assets/icons";
import JuneeText from "../Typography";
import QRScan from "../Card/QRScan";
import NormalCard from "../Card/NormalCard";
import { RestaurantItem } from "@junee/components/Listitem";
import restaurants from "@junee/data/restaurants.json";
import JuneeButton from "../Button";

type Props = {
  onCancelBorrow: () => void;
  onBack: () => void;
  onNext: () => void;
};

export default function BorrowBowlStep1Form({ onCancelBorrow, onNext, onBack }: Props) {
  const [captured, setCaptured] = useState(true);
  const [openScanIssueModal, setOpenScanIssueModal] = useState(false);
  const [openDelayModal, setOpenDelayModal] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [data, setData] = useState("");
  const onCaptureImage = (e: BarCodeReadEvent) => {
    console.log(e.data);
    setCaptured(true);
    setData(e.data);
  };
  const onCancelBorrowFromModal = () => {
    setOpenDelayModal(false);
    onCancelBorrow();
  };
  const onClickBack = () => {
    if (isSelecting) {
      setIsSelecting(false);
    } else if (captured) {
      setCaptured(false);
    } else {
      onBack();
    }
  };
  return (
    <ScrollView>
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
            <ProgressDots steps={3} activeStep={1} />
            {isSelecting ? (
              <NormalCard title="Select a Restaurant you are at" description="">
                <ScrollView nestedScrollEnabled={true} style={styles.restaurantList}>
                  {restaurants.map((item, index) => {
                    return <RestaurantItem key={index} data={item} onClick={onNext} />;
                  })}
                </ScrollView>
              </NormalCard>
            ) : captured ? (
              <NormalCard
                title="Welcome to Nyokee!"
                description="Tell the staff what you’d like and click below to ask for junee bowls"
                buttonTxt="Continue"
                buttonStyle={{marginTop: -10}}
                onClick={onNext}
              >
                <Image
                  source={require("@junee/assets/images/welcome_borrow.png")}
                  style={{ width: 217, height: 228, alignSelf: "center", marginTop: 20 }}
                  resizeMode="cover"
                />
              </NormalCard>
            ) : (
              <QRScan
                title="Scan junee QR code"
                buttonTxt={"Problems? Select a Restaurant"}
                onClick={() => setIsSelecting(true)}
                onCapture={onCaptureImage}
                tooltip="Scanning QR code so that we know when to send this restaurant more bowls if it runs low."
                tooltipType="primary"
              />
            )}
          </NormalView>
          <FooterView>
            <TouchableOpacity activeOpacity={0.6} onPress={onClickBack}>
              <JuneeText variant="description" style={{ marginTop: 0, color: theme.colors.white }}>
                Go Back
              </JuneeText>
            </TouchableOpacity>
          </FooterView>
          <JuneeModal variant="primary" visible={openScanIssueModal} onClose={() => setOpenScanIssueModal(false)}>
            <View style={styles.row}>
              <Exclamation_svg width={18} height={18} style={{ color: theme.colors.error }} />
              <JuneeText variant="description" style={{ marginLeft: 10, marginTop: 0, color: theme.colors.error, flex: 1 }}>
                Something’s wrong
              </JuneeText>
            </View>
            <JuneeText variant="description" style={{ marginTop: 9, color: theme.colors.primary }}>
              We don't recognise the scan. Please try again or enter the Restaurant ID.
            </JuneeText>
            <JuneeButton variant="primary" onPress={() => setOpenScanIssueModal(false)}>
              OK
            </JuneeButton>
          </JuneeModal>
          <JuneeModal variant="primary" visible={openDelayModal} onClose={() => setOpenDelayModal(false)}>
            <View style={styles.row}>
              <Exclamation_svg width={18} height={18} style={{ color: theme.colors.secondary }} />
              <JuneeText variant="description" style={{ marginLeft: 10, marginTop: 0, color: theme.colors.secondary, flex: 1 }}>
                Not ready to borrow yet?
              </JuneeText>
            </View>
            <JuneeText variant="description" style={{ marginTop: 9, color: theme.colors.primary }}>
              If you changed your mind or not ready yet, click below to cancel this borrow.
            </JuneeText>
            <JuneeButton variant="primary" onPress={onCancelBorrowFromModal}>
              Cancel this borrow
            </JuneeButton>
            <JuneeButton variant="third" onPress={() => setOpenDelayModal(false)}>
              I still want to borrow
            </JuneeButton>
          </JuneeModal>
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
  },
  restaurantList: {
    marginTop: 20,
    maxHeight: 320
  }
});
