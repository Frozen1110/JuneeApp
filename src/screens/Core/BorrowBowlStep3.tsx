import React from 'react'
import { BorrowBowlStep3Form } from '@junee/components/BorrowBowl'

type Props = {
  navigation: any
}

export default function BorrowBowl({
  navigation
}: Props) {
  return (
    <BorrowBowlStep3Form
      onCancelBorrow={() => navigation.navigate("Main")}
      onNext={() => navigation.navigate("Main")}
      onBack={() => navigation.goBack()}
    />
  )
}