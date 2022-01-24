import React, {useState} from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Background from "@junee/components/Background";
import Logo from "@junee/components/Logo";
import { HeaderView, NormalView } from "@junee/components/Views";
import { theme } from "@junee/theme";
import restaurantData from "@junee/data/restaurants.json";
import NotifySection from "./NotifySection";
import InformationLine from "./InformationLine";
import StartBorrowBowlForm from "./StartBorrowBowlForm";
import RestaurantList from "./RestaurantList";
import AchivementsSection from "./AchivementsSection";
import ReturnBowlForm from "./ReturnBowlForm";
import { Scan_svg, Exclamation_svg } from "@junee/assets/icons";
import JuneeModal from "../Modal";
import JuneeButton from "../Button";
import JuneeText from "../Typography";
import TextMultiInput from "@junee/components/TextMultiInput";

type Props = {
  onBorrowBowlPressed: () => void;
  onReturnBowlPressed: () => void;
  onShowDescription: () => void;
  onAlreadyReturned: () => void;
};

export default function HomeForm({ onBorrowBowlPressed, onReturnBowlPressed, onAlreadyReturned, onShowDescription }: Props) {
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false); 
  const [feedback, setFeedback] = useState("");
  const onViewMap = () => {};
  const onSendFeedback = () => {
    console.log(feedback);
    setOpenFeedbackModal(false);
  }
  return (
    <KeyboardAwareScrollView>
      <Background bottomTab={true}>
        <HeaderView>
          <View style={styles.row}>
            <Logo />
            <TouchableOpacity activeOpacity={0.6} onPress={onBorrowBowlPressed}>
              <Scan_svg width={27} height={27} style={{ color: theme.colors.white }} />
            </TouchableOpacity>
          </View>
        </HeaderView>
        <NormalView>
          <NotifySection
            title="Enjoy your lunch"
            description="Please review your junee experience"
            onRateUp={() => {}}
            onFeedback={() => setOpenFeedbackModal(true)}
          />
          {/*
          <InformationLine
            data="Enter workplace code to start borrow"
            backgroundColor={theme.colors.yellow}
            color={theme.colors.black}
            onClick={() => {}}
          />
          <InformationLine
            data="Get your lunch with no plastic waste"
            backgroundColor={theme.colors.secondary}
            color={theme.colors.white}
            onClick={() => {}}
          />
          <View style={styles.container1}>
            <StartBorrowBowlForm
              onShowDescription={onShowDescription}
              onBorrowBowl={onBorrowBowlPressed}
              isNew={true}
            />
          </View>
          <RestaurantList 
            onViewMap={onViewMap}
            list={restaurantData}
          />
          <View style={styles.container1}>
            <StartBorrowBowlForm
              onBorrowBowl={onBorrowBowlPressed}
              isNew={false}
            />
          </View>
          <View style={styles.container1}>
            <ReturnBowlForm
              onReturnBowl={onReturnBowlPressed}
              onAlreadyReturned={onAlreadyReturned}
              bowlCount={2}
            />
          </View>
           */}
          <AchivementsSection teamSaved={148} singleSaved={14} />
          <View style={styles.container1}>
            <ReturnBowlForm onReturnBowl={onReturnBowlPressed} onAlreadyReturned={onAlreadyReturned} bowlCount={2} />
          </View>
        </NormalView>

        <JuneeModal variant="primary" visible={openFeedbackModal} onClose={() => setOpenFeedbackModal(false)}>
          <View style={styles.row}>
            <Exclamation_svg width={18} height={18} style={{ color: theme.colors.secondary }} />
            <JuneeText variant="description" style={{ marginLeft: 10, marginTop: 0, color: theme.colors.secondary, flex: 1 }}>
              Help us to improve
            </JuneeText>
          </View>
          <TextMultiInput
            placeholder=""
            returnKeyType="next"
            value={feedback}
            onChangeText={(text: string) => setFeedback(text)}
          />
          <JuneeButton variant="primary" onPress={onSendFeedback}>
            Send
          </JuneeButton>
        </JuneeModal>
      </Background>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container1: {
    paddingHorizontal: 18,
    paddingVertical: 25,
    backgroundColor: theme.colors.third
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
