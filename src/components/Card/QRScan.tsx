import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { BarCodeReadEvent } from "react-native-camera";
import { Card } from "@junee/components/Views";
import JuneeButton from "@junee/components/Button";
import { theme } from "@junee/theme";
import { Question_svg } from "@junee/assets/icons";
import JuneeText from "../Typography";
import JuneeTooltip from "../Tooltip";

type Props = {
  title: string;
  buttonTxt: string;
  buttonType?: string;
  onClick: () => void;
  onCapture: (e: BarCodeReadEvent) => void;
  tooltip: string;
  tooltipType?: string;
};

export default function QRScan({ title, buttonTxt, buttonType = "third", onClick, onCapture, tooltip, tooltipType="primary" }: Props) {
  const [showToolTip, setShowToolTip] = useState(false);
  const onClickHelp = () => {
    setShowToolTip(!showToolTip);
  };
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <JuneeText variant="description" style={{ color: theme.colors.primary, marginTop: 0 }}>
          {title}
        </JuneeText>
        <TouchableOpacity activeOpacity={0.6} onPress={onClickHelp}>
          <Question_svg width={18} height={18} style={{ color: theme.colors.secondary }} />
        </TouchableOpacity>
      </View>

      <View style={styles.scanView}>
        <QRCodeScanner
          onRead={onCapture}
          reactivate={true}
          containerStyle={styles.cameraContainer}
          cameraStyle={styles.camera}
          topViewStyle={styles.topView}
          markerStyle={styles.marker}
          bottomViewStyle={styles.bottomView}
          cameraProps={{
            type: "back",
            ratio: "1:1"
          }}
        />
      </View>
      <JuneeButton variant={buttonType} onPress={onClick}>
        {buttonTxt}
      </JuneeButton>

      {showToolTip && (
        <View style={styles.tooltip}>
          <JuneeTooltip
            variant={tooltipType}
            title="Why?"
            description={tooltip}
          />
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 18,
    paddingTop: 18,
    marginTop: 20
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  scanView: {
    borderRadius: 25,
    marginTop: 20,
    height: 200,
    overflow: "hidden"
  },
  cameraContainer: {
    borderRadius: 25,
    overflow: "hidden"
  },
  camera: {
    borderRadius: 25
  },
  bottomView: {
    height: 0,
    flex: 0
  },
  topView: {
    height: 0,
    flex: 0
  },
  marker: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: theme.colors.white
  },
  tooltip: {
    position: "absolute",
    zIndex: 2,
    right: -25,
    top: 40
  }
});
