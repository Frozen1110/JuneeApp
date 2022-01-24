import React from 'react'
import { BorrowBowlStep1Form } from '@junee/components/BorrowBowl'

type Props = {
  navigation: any
}

export default function BorrowBowl({
  navigation
}: Props) {
  return (
    <BorrowBowlStep1Form
      onCancelBorrow={() => navigation.navigate("Main")}
      onNext={() => navigation.navigate("BorrowBowlStep2")}
      onBack={() => navigation.goBack()}
    />
  )
}