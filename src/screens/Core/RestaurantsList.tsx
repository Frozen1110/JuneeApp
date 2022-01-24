import React from 'react'
import Background from '@junee/components/Background'
import Header from '@junee/components/Header'
import RestaurantsList from '@junee/components/Restaurants/List'

type Props = {
  navigation: any
}

export default function RestaurantsListPage({
  navigation
}: Props) {
  return (
    <Background>
      <Header>Restaurants</Header>
      <RestaurantsList 
        onShowRestaurantMap={() => navigation.replace('RestaurantsMap')}
      />
    </Background>
  )
}
