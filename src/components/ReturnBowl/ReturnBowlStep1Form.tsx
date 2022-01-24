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
import JuneeButton from "../Button";
import {RestaurantItem} from "../Listitem" ;
import ProblemItem from "../Listitem/ProblemItem";
import restaurants from "@junee/data/restaurants.json";
import problems from "@junee/data/problems.json";

type Props = {
  onCancelReturn: () => void;
  onBack: () => void;
  onNext: () => void;
  returned: boolean;
};

export default function ReturnBowlStep1Form({ onCancelReturn, onNext, onBack, returned=false }: Props) {
  const [captured, setCaptured] = useState(returned);
  const [openScanIssueModal, setOpenScanIssueModal] = useState(false);
  const [openDelayModal, setOpenDelayModal] = useState(false);
  const [data, setData] = useState("");
  const [isSelecting, setIsSelecting] = useState(false);
  const [isProblem, setIsProblem] = useState(false);
  const onCaptureImage = (e: BarCodeReadEvent) => {
    console.log(e.data);
    setCaptured(true);
    setData(e.data);
  };
  const onCancelReturnFromModal = () => {
    setOpenDelayModal(false);
    onCancelReturn();
  };
  const onSelectRestaurant = () => {
    setIsSelecting(true);
  };
  const onClickBack = () => {
    if (isProblem) setIsProblem(false);
    else if (isSelecting) setIsSelecting(false);
    else onBack();
  };
  const onProblems = () => {
    setIsProblem(true);
  };
  const onClickProblem = () => {
    setIsProblem(false);
  };
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
            <ProgressDots steps={2} activeStep={1} />
            {isProblem ? (
              <NormalCard title="Select a problem" description="">
                <ScrollView nestedScrollEnabled={true} style={styles.item}>
                  {problems.map((item, index) => {
                    return <ProblemItem key={index} data={item} onClick={onClickProblem} />;
                  })}
                </ScrollView>
              </NormalCard>
            ) : isSelecting ? (
              <NormalCard title="Select a Return Point you are at" description="">
                <ScrollView nestedScrollEnabled={true} style={styles.item}>
                  {restaurants.map((item, index) => {
                    return <RestaurantItem key={index} data={item} onClick={onNext} />;
                  })}
                </ScrollView>
              </NormalCard>
            ) : captured ? (
              <View>
                <NormalCard title="Thanks for returning!" description="Do you remember which return point you used?" buttonTxt="">
                  <Image
                    source={require("@junee/assets/images/welome_return.png")}
                    style={{ width: 230, height: 170, alignSelf: "center", marginTop: 20 }}
                    resizeMode="cover"
                  />
                  <JuneeButton variant="primary" style={{ marginTop: 0 }} onPress={onNext}>
                    Huckletree 1st Floor Kitchen
                  </JuneeButton>
                  <JuneeButton variant="lightGreen" onPress={() => setCaptured(false)}>
                    Another Return Point
                  </JuneeButton>
                </NormalCard>
                <TouchableOpacity activeOpacity={0.6} onPress={onProblems}>
                  <JuneeText variant="description" style={{ color: theme.colors.white, textAlign: "center", marginTop: -20 }}>
                    Problems?
                  </JuneeText>
                </TouchableOpacity>
              </View>
            ) : (
              <QRScan
                title={"Scan return point QR code"}
                buttonTxt={"Or select a Return Point"}
                buttonType={"primary"}
                onClick={onSelectRestaurant}
                onCapture={onCaptureImage}
                tooltip={"Scanning QR code so that we know when to empty this return point bin."}
                tooltipType="secondary"
              />
            )}
          </NormalView>
          <FooterView>
            {(!captured || isProblem) && (
              <TouchableOpacity activeOpacity={0.6} onPress={onClickBack}>
                <JuneeText variant="description" style={{ marginTop: 0, color: theme.colors.white }}>
                  Go back
                </JuneeText>
              </TouchableOpacity>
            )}
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
                Not ready to return yet?
              </JuneeText>
            </View>
            <JuneeText variant="description" style={{ marginTop: 9, color: theme.colors.primary }}>
              If you changed your mind or not ready yet, click below to cancel this return.
            </JuneeText>
            <JuneeButton variant="primary" onPress={onCancelReturnFromModal}>
              Cancel this return
            </JuneeButton>
            <JuneeButton variant="third" onPress={() => setOpenDelayModal(false)}>
              I still want to return
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
  item: {
    marginTop: 20,
    maxHeight: 320
  }
});
