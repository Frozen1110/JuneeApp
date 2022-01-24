import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Background from '@junee/components/Background'
import Logo from '@junee/components/Logo'
import { HeaderView, FullPageView, FooterView, NormalView } from '@junee/components/Views'
import { theme } from '@junee/theme'
import { Close_svg } from '@junee/assets/icons'
import JuneeText from '../Typography'
import JuneeButton from '../Button'
import SelectableList from '../Card/SelectableList'
import { BORROW_ROLE_TXTS } from '@junee/theme/const'

type Props = {
  onCancelBorrow: () => void,
  onNext: () => void,
}

export default function BorrowBowlForm({
  onCancelBorrow,
  onNext,
}: Props) {
  return (
    <KeyboardAwareScrollView>
      <Background style={{backgroundColor: theme.colors.secondary}}>
        <HeaderView>
          <View style={styles.row}>
            <Logo type={2}/>
            <TouchableOpacity activeOpacity={0.6} onPress={onCancelBorrow}>
              <Close_svg width={18} height={18} style={{color: theme.colors.white}} />
            </TouchableOpacity>
          </View>
        </HeaderView>
        <FullPageView>
          <NormalView>
            <JuneeText
              variant='legend'
            >
              How to borrow
            </JuneeText>
            <JuneeButton
              variant='small'
              onPress={onNext}
            >
              Find a junee restaurant
            </JuneeButton>
            <SelectableList
              data={BORROW_ROLE_TXTS}
              buttonTxt={'I’m ready to scan'}
              onClick={onNext}
              style={{marginTop: 20}}
            />
            <JuneeText
              variant='footerLight'
            >
              This step will be skipped once you borrowed twice.
            </JuneeText>
          </NormalView>
        </FullPageView>
      </Background>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})