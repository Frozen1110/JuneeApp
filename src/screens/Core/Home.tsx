import React from 'react'
import HomeForm from '@junee/components/Home'

type Props = {
  navigation: any
}

export default function ScanPage({
  navigation
}: Props) {
  return (
    <HomeForm
      onBorrowBowlPressed={() => navigation.replace("BorrowBowl")}
      onReturnBowlPressed={() => navigation.replace("ReturnBowl")}
      onAlreadyReturned={() => navigation.navigate("ReturnBowlStep1", {returned: true})}
      onShowDescription={() => {}}
    />
  )
}