import React from 'react'
import { BorrowBowlStep2Form } from '@junee/components/BorrowBowl'

type Props = {
  navigation: any
}

export default function BorrowBowl({
  navigation
}: Props) {
  return (
    <BorrowBowlStep2Form
      onCancelBorrow={() => navigation.navigate("Main")}
      onNext={() => navigation.navigate("BorrowBowlStep3")}
      onBack={() => navigation.goBack()}
    />
  )
}