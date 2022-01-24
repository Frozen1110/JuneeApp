import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Card } from "@junee/components/Views";
import JuneeButton from "@junee/components/Button";
import { SelectableListItem } from "@junee/components/Listitem";

type Props = {
  data: Array<string>;
  buttonTxt: string;
  buttonType?: string;
  onClick: () => void;
  style?: any;
};

export default function SelectableList({ data, buttonTxt, buttonType = "third", style = {}, onClick }: Props) {
  const [checkArray, setCheckArray] = useState<Array<boolean>>(new Array(data.length).fill(false));
  const [active, setActive] = useState(false);

  useEffect(() => {
    let isContinue = true;
    for (let i = 0; i < checkArray.length; i++) {
      if (!checkArray[i]) isContinue = false;
    }
    setActive(isContinue);
  }, [checkArray]);

  const onClickItem = (index: number) => {
    let tmpObj = [...checkArray];
    tmpObj[index] = !tmpObj[index];
    setCheckArray(tmpObj);
  };

  return (
    <Card style={[style, { marginBottom: 0 }]}>
      {data &&
        data.map((item, index) => {
          return (
            <SelectableListItem
              key={index}
              data={item}
              checked={checkArray[index]}
              onClick={() => onClickItem(index)}
              style={index === 0 ? styles.topItem : {}}
            />
          );
        })}
      <JuneeButton
        variant={active ? buttonType : "disabled"}
        onPress={onClick}
        style={{ marginHorizontal: 17, marginTop: 22 }}
        active={active}
      >
        {buttonTxt}
      </JuneeButton>
    </Card>
  );
}

const styles = StyleSheet.create({
  topItem: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 25
  }
});
